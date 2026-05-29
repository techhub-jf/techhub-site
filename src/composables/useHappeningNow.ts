import { ref, computed, onUnmounted } from 'vue'

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
    const raw = getTime()
    if (!raw) return false

    const [startStr, endStr] = raw.split('-').map((part) => part.trim())
    const start = parseEventTime(startStr ?? '')
    if (!start) return false

    // Sem fim definido ou "∞" (Happy Hour): vale até o fim do dia do evento.
    const end =
      !endStr || endStr === '∞'
        ? new Date(EVENT_YEAR, EVENT_MONTH, EVENT_DAY, 23, 59, 59, 999)
        : parseEventTime(endStr)
    if (!end) return false

    const t = now.value.getTime()
    return t >= start.getTime() && t < end.getTime()
  })
}
