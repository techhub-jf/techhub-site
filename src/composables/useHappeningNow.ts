import { ref, reactive, computed, onUnmounted } from 'vue'

// Dia do evento: 30 de maio de 2026 (horário local do dispositivo).
// O mês é 0-indexado, então maio = 4.
const EVENT_YEAR = 2026
const EVENT_MONTH = 4
const EVENT_DAY = 30

/**
 * Override de teste: como o destaque só acontece no dia do evento, dá pra
 * simular um horário acrescentando `?now=HH:MM` na URL (ex.: `?now=10:50`).
 * Com o parâmetro presente o relógio fica "congelado" nesse horário.
 */
function readDebugNow(): Date | null {
  if (typeof window === 'undefined') return null
  const param = new URLSearchParams(window.location.search).get('now')
  const match = param?.match(/^(\d{1,2}):(\d{2})$/)
  if (!match) return null
  return new Date(EVENT_YEAR, EVENT_MONTH, EVENT_DAY, Number(match[1]), Number(match[2]))
}

const debugNow = readDebugNow()

// Relógio único compartilhado por todos os cards.
const now = ref(debugNow ?? new Date())
let timer: ReturnType<typeof setInterval> | undefined
let subscribers = 0

function startClock() {
  subscribers++
  if (debugNow || timer !== undefined) return
  timer = setInterval(() => {
    now.value = new Date()
  }, 30_000)
}

function stopClock() {
  subscribers--
  if (subscribers <= 0 && timer !== undefined) {
    clearInterval(timer)
    timer = undefined
    subscribers = 0
  }
}

/** Converte "9:00" no Date correspondente no dia do evento. */
function parseEventTime(hhmm: string): Date | null {
  const match = hhmm.trim().match(/^(\d{1,2}):(\d{2})$/)
  if (!match) return null
  return new Date(EVENT_YEAR, EVENT_MONTH, EVENT_DAY, Number(match[1]), Number(match[2]))
}

/** Converte "9:00 - 10:00" / "18:30 - ∞" em timestamps de início e fim. */
function parseRange(raw: string | undefined): { start: number; end: number } | null {
  if (!raw) return null
  const [startStr, endStr] = raw.split('-').map((part) => part.trim())
  const start = parseEventTime(startStr ?? '')
  if (!start) return null
  // Sem fim definido ou "∞" (Happy Hour): vale até o fim do dia do evento.
  const end =
    !endStr || endStr === '∞'
      ? new Date(EVENT_YEAR, EVENT_MONTH, EVENT_DAY, 23, 59, 59, 999)
      : parseEventTime(endStr)
  if (!end) return null
  return { start: start.getTime(), end: end.getTime() }
}

/**
 * Indica se o evento está rolando agora (entre o credenciamento, às 8:00, e o
 * fim do dia do evento). Usado para mostrar o botão "acontecendo agora".
 */
export function useEventLive() {
  startClock()
  onUnmounted(stopClock)

  return computed(() => {
    const start = new Date(EVENT_YEAR, EVENT_MONTH, EVENT_DAY, 8, 0)
    const end = new Date(EVENT_YEAR, EVENT_MONTH, EVENT_DAY, 23, 59, 59, 999)
    const t = now.value.getTime()
    return t >= start.getTime() && t < end.getTime()
  })
}

/**
 * Recebe um getter para a string de horário do card ("9:00 - 10:00", "18:30 - ∞")
 * e devolve um computed que indica se aquela faixa está acontecendo agora.
 */
export function useHappeningNow(getTime: () => string | undefined) {
  startClock()
  onUnmounted(stopClock)

  return computed(() => {
    const range = parseRange(getTime())
    if (!range) return false
    const t = now.value.getTime()
    return t >= range.start && t < range.end
  })
}

// ---------------------------------------------------------------------------
// Agenda compartilhada: cada card se registra para que o bloco "Agora / A seguir"
// saiba o que está rolando sem precisar duplicar os dados da programação.
// ---------------------------------------------------------------------------

export interface AgendaEntry {
  id: number
  start: number
  end: number
  time: string
  title: string
  location?: string
}

const entries = reactive<AgendaEntry[]>([])
let nextId = 0

/** Registra uma sessão e devolve uma função para remover o registro. */
export function registerSession(info: { time: string; title: string; location?: string }) {
  const range = parseRange(info.time)
  if (!range) return () => {}
  const entry: AgendaEntry = { id: nextId++, ...range, ...info }
  entries.push(entry)
  return () => {
    const i = entries.findIndex((e) => e.id === entry.id)
    if (i >= 0) entries.splice(i, 1)
  }
}

/** Sessão(ões) acontecendo agora e a(s) próxima(s), reativas ao relógio. */
export function useAgenda() {
  startClock()
  onUnmounted(stopClock)

  const current = computed(() => {
    const t = now.value.getTime()
    return entries.filter((e) => t >= e.start && t < e.end).sort((a, b) => a.start - b.start)
  })

  const next = computed(() => {
    const t = now.value.getTime()
    const upcoming = entries.filter((e) => e.start > t).sort((a, b) => a.start - b.start)
    if (!upcoming.length) return [] as AgendaEntry[]
    const soonest = upcoming[0].start
    return upcoming.filter((e) => e.start === soonest)
  })

  return { current, next }
}

// ---------------------------------------------------------------------------
// Filtro compartilhado por sala e por trilha/tag.
// ---------------------------------------------------------------------------

export const scheduleFilter = reactive<{ room: string | null; tag: string | null }>({
  room: null,
  tag: null,
})

/** Salas disponíveis (key = trecho buscado dentro da localização do card). */
export const ROOMS = [
  { key: 'Auditório', label: 'Auditório' },
  { key: 'Delete sem Where', label: 'Delete sem Where' },
  { key: 'Deploy da Sexta', label: 'Deploy da Sexta' },
]

/** Trilhas/tags disponíveis para filtrar. */
export const TRACKS = [
  { id: 'ai', name: 'IA' },
  { id: 'security', name: 'Segurança' },
  { id: 'devops', name: 'DevOps' },
  { id: 'data', name: 'Dados' },
  { id: 'career', name: 'Carreira' },
  { id: 'product', name: 'Produto' },
]

/**
 * Um card é visível se passa nos dois filtros. Sessões "comuns" (sem sala/tag,
 * como Coffee Break e Almoço) ficam sempre visíveis para não quebrar a linha do
 * tempo do dia.
 */
export function matchesFilter(
  location: string | undefined,
  tags: { id: string; name: string }[] | undefined,
): boolean {
  if (scheduleFilter.room && location) {
    if (!location.includes(scheduleFilter.room)) return false
  }
  if (scheduleFilter.tag && tags && tags.length) {
    if (!tags.some((t) => t.id === scheduleFilter.tag)) return false
  }
  return true
}
