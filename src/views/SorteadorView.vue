<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

let cleanup: (() => void) | null = null

onMounted(() => {
  const root = document.getElementById('shc-root') as HTMLElement
  const $ = (s: string) => root.querySelector(s) as HTMLElement

  /* ---------- hub logo (SVG, recriado do tema) ---------- */
  function hubSVG(stroke: string, core: string) {
    const rays: string[] = []
    for (let i = 0; i < 8; i++) {
      const a = (Math.PI / 4) * i - Math.PI / 2
      const x1 = 50 + Math.cos(a) * 20, y1 = 50 + Math.sin(a) * 20
      const x2 = 50 + Math.cos(a) * 36, y2 = 50 + Math.sin(a) * 36
      const nx = 50 + Math.cos(a) * 42, ny = 50 + Math.sin(a) * 42
      rays.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="3" stroke-linecap="round"/>
        <circle cx="${nx}" cy="${ny}" r="5" fill="${stroke}"><animate attributeName="opacity" values="1;.3;1" dur="${2 + i * 0.18}s" repeatCount="indefinite"/></circle>`)
    }
    return rays.join('') + `<circle cx="50" cy="50" r="13" fill="${core}"><animate attributeName="r" values="13;14.5;13" dur="2.4s" repeatCount="indefinite"/></circle>`
  }
  $('#hubLogo').innerHTML = hubSVG('#ffffff', '#3d82ff')
  $('#hubBg').innerHTML = `<svg viewBox="0 0 100 100">${hubSVG('#3d82ff', '#5fd2ff')}</svg>`

  /* =========================================================
     XLSX reader — unzip via DecompressionStream + parse XML
     ========================================================= */
  async function inflateRaw(bytes: Uint8Array) {
    if (typeof (window as any).DecompressionStream === 'undefined')
      throw new Error('Navegador sem suporte a DecompressionStream. Use Chrome, Edge ou Safari atualizado.')
    const ds = new (window as any).DecompressionStream('deflate-raw')
    const stream = new Blob([bytes]).stream().pipeThrough(ds)
    return new Uint8Array(await new Response(stream).arrayBuffer())
  }
  function readZip(buf: ArrayBuffer) {
    const dv = new DataView(buf), u8 = new Uint8Array(buf), n = buf.byteLength
    let eo = -1
    for (let i = n - 22; i >= Math.max(0, n - 65557); i--) { if (dv.getUint32(i, true) === 0x06054b50) { eo = i; break } }
    if (eo < 0) throw new Error('Arquivo .xlsx inválido (EOCD não encontrado).')
    const cnt = dv.getUint16(eo + 10, true); let off = dv.getUint32(eo + 16, true)
    const entries: Record<string, { method: number; csize: number; lho: number }> = {}
    for (let i = 0; i < cnt; i++) {
      if (dv.getUint32(off, true) !== 0x02014b50) break
      const method = dv.getUint16(off + 10, true)
      const csize = dv.getUint32(off + 20, true)
      const fnLen = dv.getUint16(off + 28, true)
      const exLen = dv.getUint16(off + 30, true)
      const cmLen = dv.getUint16(off + 32, true)
      const lho = dv.getUint32(off + 42, true)
      const name = new TextDecoder().decode(u8.subarray(off + 46, off + 46 + fnLen))
      entries[name] = { method, csize, lho }
      off += 46 + fnLen + exLen + cmLen
    }
    return { dv, u8, entries }
  }
  async function extract(zip: ReturnType<typeof readZip>, name: string) {
    const e = zip.entries[name]; if (!e) return null
    const fnLen = zip.dv.getUint16(e.lho + 26, true)
    const exLen = zip.dv.getUint16(e.lho + 28, true)
    const start = e.lho + 30 + fnLen + exLen
    const data = zip.u8.subarray(start, start + e.csize)
    const raw = e.method === 0 ? data : await inflateRaw(data)
    return new TextDecoder('utf-8').decode(raw)
  }
  const colToIdx = (ref: string) => { const m = ref.match(/^([A-Z]+)/)!; let c = 0; for (const ch of m[1]) c = c * 26 + (ch.charCodeAt(0) - 64); return c }
  const idxToCol = (i: number) => { let s = ''; while (i > 0) { const m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = (i - m - 1) / 26 } return s }

  async function parseXlsx(buf: ArrayBuffer) {
    const zip = readZip(buf)
    let shared: string[] = []
    const ssXml = await extract(zip, 'xl/sharedStrings.xml')
    if (ssXml) {
      const doc = new DOMParser().parseFromString(ssXml, 'application/xml')
      shared = [...doc.getElementsByTagName('si')].map(si =>
        [...si.getElementsByTagName('t')].map(t => t.textContent).join(''))
    }
    let sheetName = 'xl/worksheets/sheet1.xml'
    if (!zip.entries[sheetName]) {
      const k = Object.keys(zip.entries).find(x => /^xl\/worksheets\/.*\.xml$/.test(x))
      if (k) sheetName = k
    }
    const shXml = await extract(zip, sheetName)
    if (!shXml) throw new Error('Planilha não encontrada dentro do arquivo.')
    const doc = new DOMParser().parseFromString(shXml, 'application/xml')
    const rows: Record<string, string>[] = []
    for (const row of doc.getElementsByTagName('row')) {
      const cells: Record<string, string> = {}
      for (const c of row.getElementsByTagName('c')) {
        const ref = c.getAttribute('r'); if (!ref) continue
        const col = idxToCol(colToIdx(ref))
        const t = c.getAttribute('t')
        let val = ''
        if (t === 'inlineStr') {
          const is = c.getElementsByTagName('t')
          val = is.length ? [...is].map(x => x.textContent).join('') : ''
        } else if (t === 's') {
          const v = c.getElementsByTagName('v')[0]
          val = v ? (shared[parseInt(v.textContent!, 10)] || '') : ''
        } else {
          const v = c.getElementsByTagName('v')[0]
          val = v ? v.textContent! : ''
        }
        cells[col] = val.trim()
      }
      rows.push(cells)
    }
    return rows
  }

  /* ---------- mapear colunas + filtrar check-in + dedupe ---------- */
  type Person = { name: string; ticket: string; type: string; email: string; raw: Record<string, string> }
  type Built = { total: number; checked: number; eligible: Person[]; headers: string[] }
  const norm = (s: string) => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim()

  function buildParticipants(rows: Record<string, string>[]): Built {
    let hi = -1, head: Record<string, string> | null = null
    for (let i = 0; i < rows.length; i++) {
      const vals = Object.values(rows[i]).map(norm)
      if (vals.includes('nome') && vals.some(v => v.includes('check'))) { hi = i; head = rows[i]; break }
    }
    if (hi < 0) throw new Error('Cabeçalho não encontrado (esperado colunas "Nome" e "Check-in").')
    const find = (pred: (t: string) => boolean) => {
      for (const [col, txt] of Object.entries(head!)) { if (pred(norm(txt))) return col }
      return null
    }
    const C = {
      name: find(t => t === 'nome'),
      surname: find(t => t === 'sobrenome'),
      email: find(t => t === 'email'),
      cpf: find(t => t === 'cpf'),
      ticket: find(t => t.includes('ingresso') && t.includes('n') && !t.includes('tipo')),
      type: find(t => t.includes('tipo de ingresso')),
      checkin: find(t => t === 'check-in' || (t.includes('check') && !t.includes('data'))),
      chkDate: find(t => t.includes('data') && t.includes('check')),
    }
    if (!C.name) throw new Error('Coluna "Nome" não encontrada.')

    // ordem original das colunas (texto do cabeçalho), p/ exportar todos os dados
    const headerCols = Object.entries(head!).map(([col, txt]) => ({ col, name: (txt || '').trim() })).filter(h => h.name)

    const seen = new Map<string, Person>()
    let total = 0, checked = 0
    for (let i = hi + 1; i < rows.length; i++) {
      const r = rows[i]
      const nm = (r[C.name!] || '').trim()
      if (!nm) continue
      total++
      const ci = norm(C.checkin ? r[C.checkin] : '')
      const hasDate = !!(C.chkDate && (r[C.chkDate] || '').trim().length > 0)
      const isCheck = ['sim', 'yes', 'true', '1', 'x', 'ok', '✓', 'presente'].includes(ci) || hasDate
      if (!isCheck) continue
      checked++
      const full = (nm + ' ' + (C.surname ? r[C.surname] || '' : '')).replace(/\s+/g, ' ').trim()
      const key = (C.email ? (r[C.email] || '').toLowerCase() : '') || (C.cpf ? r[C.cpf] || '' : '') || full.toLowerCase()
      if (seen.has(key)) continue
      const raw: Record<string, string> = {}
      for (const h of headerCols) raw[h.name] = (r[h.col] || '').trim()
      seen.set(key, { name: full, ticket: C.ticket ? (r[C.ticket] || '').trim() : '', type: C.type ? (r[C.type] || '').trim() : '', email: C.email ? (r[C.email] || '').trim() : '', raw })
    }
    return { total, checked, eligible: [...seen.values()], headers: headerCols.map(h => h.name) }
  }

  /* ---------- colar lista: um nome por linha (todos elegíveis) ---------- */
  function buildFromText(text: string): Built {
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean)
    const seen = new Map<string, Person>()
    let total = 0
    for (let i = 0; i < lines.length; i++) {
      const parts = lines[i].split(/[,;\t]/).map(s => s.trim()).filter(Boolean)
      let name = parts[0]
      if (!name) continue
      // ignora linha de cabeçalho óbvia
      if (i === 0 && /^(nome|name|participante)$/i.test(name)) continue
      total++
      const emailPart = parts.find(p => /@/.test(p)) || ''
      const key = (emailPart || name).toLowerCase()
      if (seen.has(key)) continue
      seen.set(key, { name, ticket: '', type: '', email: emailPart, raw: { Nome: name } })
    }
    return { total, checked: total, eligible: [...seen.values()], headers: ['Nome'] }
  }

  /* ========================= estado + UI ========================= */
  let DATA: Built | null = null
  let pool: Person[] = []
  let winners: Person[] = []
  let headers: string[] = []
  let qty = 1
  let noRepeat = true
  let spinning = false

  function setStats() {
    $('#sTotal').textContent = String(DATA ? DATA.total : 0)
    $('#sChk').textContent = String(DATA ? DATA.checked : 0)
    $('#sElig').textContent = String(DATA ? DATA.eligible.length : 0)
    $('#sWon').textContent = String(winners.length)
    $('#poolTag').textContent = DATA ? `${pool.length} elegíveis no sorteio` : 'aguardando lista…'
  }
  function rnd(max: number) { const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % max }

  function startWith(built: Built) {
    if (built.eligible.length === 0) {
      showErr(built.checked === 0
        ? 'Ninguém com check-in marcado ainda. Suba a planilha já com os check-ins do dia.'
        : 'Nenhum participante elegível encontrado.')
      return false
    }
    DATA = built; pool = [...built.eligible]; winners = []; headers = built.headers
    $('#upload').style.display = 'none'
    $('#panel').classList.add('show')
    $('#muteBtn').classList.add('show')
    renderWinners(); setStats()
    setName('Pronto para sortear', true); $('#kicker').textContent = ''; $('#meta').textContent = ''
    return true
  }

  async function loadFile(file: File | undefined) {
    $('#err').style.display = 'none'
    if (!file) return
    if (!/\.xlsx$/i.test(file.name)) { showErr('Formato inválido. Envie um arquivo .xlsx.'); return }
    try {
      const buf = await file.arrayBuffer()
      const rows = await parseXlsx(buf)
      startWith(buildParticipants(rows))
    } catch (e: any) { showErr(e.message || 'Falha ao ler o arquivo.'); console.error(e) }
  }
  function loadPaste() {
    $('#err').style.display = 'none'
    const txt = ($('#pasteArea') as HTMLTextAreaElement).value
    if (!txt.trim()) { showErr('Cole ao menos um nome (um por linha).'); return }
    try { startWith(buildFromText(txt)) } catch (e: any) { showErr(e.message || 'Falha ao ler a lista.') }
  }
  function showErr(m: string) { const el = $('#err'); el.textContent = m; el.style.display = 'block' }

  /* ---------- reel / sorteio ---------- */
  function setName(txt: string, idle = false) {
    const el = $('#name'); el.textContent = txt
    el.classList.toggle('idle', idle)
  }
  function fmtMeta(p: Person) {
    let s = ''
    if (p.type) s += p.type
    if (p.ticket) s += (s ? '  ·  ' : '') + `<span class="tk">#${p.ticket}</span>`
    return s
  }
  const escapeHtml = (s: string) => (s || '').replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' } as any)[m])

  async function draw() {
    if (spinning || !pool.length) return
    const n = Math.min(qty, pool.length)
    spinning = true; ($('#goBtn') as HTMLButtonElement).disabled = true
    for (let w = 0; w < n; w++) await spinOnce(w + 1, n)
    spinning = false; ($('#goBtn') as HTMLButtonElement).disabled = false
    setStats()
  }
  function spinOnce(idx: number, total: number) {
    return new Promise<void>(resolve => {
      const winnerIdx = rnd(pool.length)
      const winner = pool[winnerIdx]
      $('#kicker').textContent = total > 1 ? `Ganhador ${idx} de ${total}` : 'E o ganhador é…'
      $('#meta').innerHTML = ''
      const nameEl = $('#name'); nameEl.classList.remove('idle', 'win')
      const t0 = performance.now(), dur = 2600 + rnd(900)
      let last = 0
      function frame(now: number) {
        if (destroyed) { resolve(); return }
        const t = (now - t0) / dur
        if (t >= 1) {
          nameEl.classList.remove('spin')
          setName(winner.name)
          nameEl.classList.add('win')
          $('#meta').innerHTML = fmtMeta(winner)
          const fl = $('#flash'); fl.classList.remove('go'); void fl.offsetWidth; fl.classList.add('go')
          burstConfetti(); winChord()
          if (noRepeat) pool.splice(winnerIdx, 1)
          winners.push(winner); renderWinners(); setStats()
          setTimeout(resolve, total > 1 ? 1100 : 200)
          return
        }
        nameEl.classList.add('spin')
        const gap = 40 + t * t * 240
        if (now - last > gap) { last = now; setName(pool[rnd(pool.length)].name); tick() }
        requestAnimationFrame(frame)
      }
      requestAnimationFrame(frame)
    })
  }
  function renderWinners() {
    const c = $('#winners'); c.innerHTML = ''
    winners.forEach((w, i) => {
      const d = document.createElement('div'); d.className = 'wchip'
      d.innerHTML = `<span class="num">${i + 1}</span><span class="wn">${escapeHtml(w.name)}</span>${w.ticket ? `<span class="wt">#${escapeHtml(w.ticket)}</span>` : ''}`
      c.appendChild(d)
    })
    ;($('#saveBtn') as HTMLButtonElement).disabled = winners.length === 0
  }

  /* ---------- salvar ganhadores (CSV, local) ---------- */
  function csvEsc(v: string) { const s = (v ?? '').toString(); return /[";\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s }
  function exportWinners() {
    if (!winners.length) return
    // planilha → todos os dados originais; lista colada → só o nome (headers=['Nome'])
    const cols = headers.length ? headers : ['Nome']
    const lines: string[][] = [['Ordem do sorteio', ...cols]]
    winners.forEach((w, i) => {
      lines.push([String(i + 1), ...cols.map(c => w.raw[c] ?? '')])
    })
    const csv = '﻿' + lines.map(r => r.map(csvEsc).join(';')).join('\r\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
    const stamp = new Date().toISOString().slice(0, 10)
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `ganhadores-techhubjf-${stamp}.csv`
    document.body.appendChild(a); a.click()
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove() }, 1000)
  }

  /* ---------- controles ---------- */
  const fileInput = $('#file') as HTMLInputElement
  fileInput.addEventListener('change', e => loadFile((e.target as HTMLInputElement).files![0]))
  const drop = $('#drop')
  ;['dragenter', 'dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('over') }))
  ;['dragleave', 'drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('over') }))
  drop.addEventListener('drop', e => { const dt = (e as DragEvent).dataTransfer; if (dt && dt.files[0]) loadFile(dt.files[0]) })

  // tabs (xlsx / colar)
  root.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
    root.querySelectorAll('.tab').forEach(x => x.classList.remove('on'))
    t.classList.add('on')
    const m = (t as HTMLElement).dataset.mode
    $('#paneXlsx').style.display = m === 'xlsx' ? 'block' : 'none'
    $('#panePaste').style.display = m === 'paste' ? 'block' : 'none'
    $('#err').style.display = 'none'
  }))
  $('#pasteGo').addEventListener('click', loadPaste)

  $('#plus').addEventListener('click', () => { qty = Math.min(qty + 1, 99); $('#qtyVal').textContent = String(qty) })
  $('#minus').addEventListener('click', () => { qty = Math.max(1, qty - 1); $('#qtyVal').textContent = String(qty) })
  $('#goBtn').addEventListener('click', draw)
  $('#saveBtn').addEventListener('click', exportWinners)
  $('#noRepeat').addEventListener('click', function (this: HTMLElement) { noRepeat = !noRepeat; this.classList.toggle('on', noRepeat) })
  $('#resetPool').addEventListener('click', () => {
    if (!DATA || spinning) return
    pool = [...DATA.eligible]; winners = []; renderWinners(); setStats()
    setName('Pronto para sortear', true); $('#kicker').textContent = ''; $('#meta').textContent = ''
  })
  $('#newFile').addEventListener('click', () => {
    if (spinning) return
    DATA = null; pool = []; winners = []
    $('#panel').classList.remove('show'); $('#upload').style.display = 'block'
    $('#muteBtn').classList.remove('show'); fileInput.value = ''; setStats()
  })
  const onKey = (e: KeyboardEvent) => { if (e.code === 'Space' && DATA && !spinning && document.activeElement?.tagName !== 'TEXTAREA') { e.preventDefault(); draw() } }
  window.addEventListener('keydown', onKey)

  /* ========================= áudio ========================= */
  let actx: AudioContext | null = null, muted = false
  const ac = () => { if (!actx) actx = new (window.AudioContext || (window as any).webkitAudioContext)(); return actx }
  function tick() {
    if (muted) return
    try {
      const c = ac(), o = c.createOscillator(), g = c.createGain()
      o.type = 'square'; o.frequency.value = 420 + rnd(380)
      g.gain.setValueAtTime(.04, c.currentTime); g.gain.exponentialRampToValueAtTime(.0008, c.currentTime + .05)
      o.connect(g).connect(c.destination); o.start(); o.stop(c.currentTime + .05)
    } catch (e) { /* noop */ }
  }
  function winChord() {
    if (muted) return
    try {
      const c = ac(), t = c.currentTime, notes = [523.25, 659.25, 783.99, 1046.5]
      notes.forEach((f, i) => {
        const o = c.createOscillator(), g = c.createGain()
        o.type = 'triangle'; o.frequency.value = f
        const s = t + i * .06
        g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(.12, s + .02)
        g.gain.exponentialRampToValueAtTime(.0008, s + .9)
        o.connect(g).connect(c.destination); o.start(s); o.stop(s + .95)
      })
    } catch (e) { /* noop */ }
  }
  const muteIcons = {
    on: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a9 9 0 0 1 0 14"/></svg>`,
    off: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>`
  }
  $('#muteBtn').innerHTML = muteIcons.on
  $('#muteBtn').addEventListener('click', function (this: HTMLElement) {
    muted = !muted; this.innerHTML = muted ? muteIcons.off : muteIcons.on
    if (!muted && ac().resume) ac().resume()
  })

  /* ========================= fundo: rede de nós ========================= */
  let destroyed = false
  const net = $('#net') as HTMLCanvasElement, nx = net.getContext('2d')!
  let W = 0, H = 0, nodes: any[] = [], pulses: any[] = []
  const dpr = window.devicePixelRatio || 1
  function resize() {
    W = net.width = innerWidth * dpr; H = net.height = innerHeight * dpr
    net.style.width = innerWidth + 'px'; net.style.height = innerHeight + 'px'
    const count = Math.min(90, Math.floor(innerWidth * innerHeight / 16000))
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .18 * dpr, vy: (Math.random() - .5) * .18 * dpr,
      r: (Math.random() * 1.6 + .8) * dpr
    }))
  }
  const LINK = 140 * dpr
  function netLoop() {
    if (destroyed) return
    nx.clearRect(0, 0, W, H)
    const g = nx.createRadialGradient(W * .5, H * .12, 0, W * .5, H * .12, Math.max(W, H) * .9)
    g.addColorStop(0, '#0a1c44'); g.addColorStop(.5, '#070f28'); g.addColorStop(1, '#040a1c')
    nx.fillStyle = g; nx.fillRect(0, 0, W, H)
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy
      if (n.x < 0 || n.x > W) n.vx *= -1; if (n.y < 0 || n.y > H) n.vy *= -1
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy)
        if (d < LINK) {
          const o = (1 - d / LINK) * .5
          nx.strokeStyle = `rgba(60,120,255,${o})`; nx.lineWidth = dpr * .6
          nx.beginPath(); nx.moveTo(a.x, a.y); nx.lineTo(b.x, b.y); nx.stroke()
        }
      }
    }
    for (const n of nodes) {
      nx.beginPath(); nx.arc(n.x, n.y, n.r, 0, 7)
      nx.fillStyle = 'rgba(120,180,255,.9)'; nx.fill()
    }
    if (Math.random() < .04 && nodes.length > 2) {
      const a = nodes[rnd(nodes.length)], b = nodes[rnd(nodes.length)]
      if (Math.hypot(a.x - b.x, a.y - b.y) < LINK * 1.6) pulses.push({ a, b, t: 0 })
    }
    pulses = pulses.filter(p => p.t < 1)
    for (const p of pulses) {
      p.t += .02
      const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t
      nx.beginPath(); nx.arc(x, y, 2.4 * dpr, 0, 7)
      nx.fillStyle = 'rgba(95,210,255,' + (1 - p.t) + ')'; nx.fill()
    }
    requestAnimationFrame(netLoop)
  }

  /* ========================= confete ========================= */
  const cf = $('#confetti') as HTMLCanvasElement, cx = cf.getContext('2d')!
  let parts: any[] = []
  function cfResize() {
    cf.width = innerWidth * dpr; cf.height = innerHeight * dpr
    cf.style.width = innerWidth + 'px'; cf.style.height = innerHeight + 'px'
  }
  const COLORS = ['#1a6bff', '#3d82ff', '#5fd2ff', '#ffffff', '#0a1a3c', '#9ec3ff']
  function burstConfetti() {
    const cxp = cf.width * .5, cyp = cf.height * .42
    for (let i = 0; i < 160; i++) {
      const ang = Math.random() * Math.PI * 2, sp = (Math.random() * 9 + 4) * dpr
      parts.push({
        x: cxp, y: cyp, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp - 6 * dpr,
        g: .22 * dpr, w: (Math.random() * 8 + 4) * dpr, h: (Math.random() * 5 + 3) * dpr,
        rot: Math.random() * 6, vr: (Math.random() - .5) * .4, c: COLORS[rnd(COLORS.length)], life: 1
      })
    }
  }
  function cfLoop() {
    if (destroyed) return
    cx.clearRect(0, 0, cf.width, cf.height)
    parts = parts.filter(p => p.life > 0 && p.y < cf.height + 40)
    for (const p of parts) {
      p.vy += p.g; p.x += p.vx; p.y += p.vy; p.vx *= .99; p.rot += p.vr; p.life -= .006
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.rot); cx.globalAlpha = Math.max(0, p.life)
      cx.fillStyle = p.c; cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); cx.restore()
    }
    requestAnimationFrame(cfLoop)
  }

  const onResize = () => { resize(); cfResize() }
  window.addEventListener('resize', onResize)
  resize(); cfResize(); setStats(); netLoop(); cfLoop()

  cleanup = () => {
    destroyed = true
    window.removeEventListener('resize', onResize)
    window.removeEventListener('keydown', onKey)
    if (actx) actx.close()
  }
})

onBeforeUnmount(() => { if (cleanup) cleanup() })
</script>

<template>
  <div id="shc-root" class="shc">
    <canvas id="net"></canvas>
    <div class="vignette"></div>
    <div class="grain"></div>
    <canvas id="confetti"></canvas>

    <button class="mutebtn" id="muteBtn" title="Som"></button>
    <RouterLink to="/" class="backlink">← voltar</RouterLink>

    <div class="stage">
      <header>
        <div class="brand">
          <svg class="hub" id="hubLogo" viewBox="0 0 100 100"></svg>
          <div class="brand-txt">
            <div class="t1">Tech <span class="hl">Hub</span> JF</div>
            <div class="t2">Sorteador</div>
          </div>
        </div>
        <div class="evt"><b id="poolTag">aguardando lista…</b></div>
      </header>

      <main>
        <!-- UPLOAD / PASTE -->
        <div class="upload" id="upload">
          <div class="tabs">
            <button class="tab on" data-mode="xlsx">Subir planilha .xlsx</button>
            <button class="tab" data-mode="paste">Colar lista</button>
          </div>

          <!-- xlsx -->
          <div id="paneXlsx">
            <label class="drop" id="drop" for="file">
              <div class="ring">
                <svg viewBox="0 0 24 24" fill="none" stroke="#3d82ff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M12 3v13" /><path d="m7 8 5-5 5 5" />
                </svg>
              </div>
              <h1>Carregue a lista de participantes</h1>
              <p>Solte aqui a planilha <b>.xlsx</b> exportada do evento. Só entram no sorteio quem fez <b>check-in</b>. Tudo roda no seu navegador.</p>
              <span class="pick">selecionar arquivo .xlsx</span>
              <div class="hint">arraste &amp; solte</div>
              <input type="file" id="file" accept=".xlsx" />
            </label>
          </div>

          <!-- paste -->
          <div id="panePaste" style="display:none">
            <div class="drop nohover">
              <h1>Cole a lista de participantes</h1>
              <p>Um nome por linha. Todos os nomes colados entram no sorteio.</p>
              <textarea id="pasteArea" placeholder="Paul McCartney&#10;John Lennon&#10;George Harrison&#10;Ringo Starr"></textarea>
              <button class="go-btn small" id="pasteGo" type="button">Usar esta lista</button>
            </div>
          </div>

          <div class="err" id="err"></div>
        </div>

        <!-- STAGE -->
        <div class="panel" id="panel">
          <div class="statline">
            <div class="stat"><div class="n" id="sTotal">0</div><div class="l">Inscritos</div></div>
            <div class="stat"><div class="n" id="sChk">0</div><div class="l">Check-in</div></div>
            <div class="stat elig"><div class="n" id="sElig">0</div><div class="l">Elegíveis</div></div>
            <div class="stat"><div class="n" id="sWon">0</div><div class="l">Sorteados</div></div>
          </div>

          <div class="reelwrap">
            <div class="hubbg" id="hubBg"></div>
            <div class="flash" id="flash"></div>
            <div class="kicker" id="kicker"></div>
            <div class="name idle" id="name">Pronto para sortear</div>
            <div class="meta" id="meta"></div>
          </div>

          <div class="controls">
            <div class="qty">
              <label>Ganhadores</label>
              <div class="stp">
                <button id="minus" type="button">−</button>
                <div class="val" id="qtyVal">1</div>
                <button id="plus" type="button">+</button>
              </div>
            </div>
            <button class="go-btn" id="goBtn">SORTEAR</button>
            <div class="toggle on" id="noRepeat" title="Impede repetir ganhadores">
              <span class="sw"></span>sem repetir
            </div>
            <button class="ghost accent" id="saveBtn" type="button" disabled>salvar ganhadores</button>
            <button class="ghost" id="resetPool" type="button">reiniciar</button>
            <button class="ghost" id="newFile" type="button">trocar lista</button>
          </div>

          <div class="winners" id="winners"></div>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
/* Fontes (self-hosted, também funcionam offline) */
@font-face {
  font-family: 'Sora'; font-style: normal; font-weight: 100 900; font-display: swap;
  src: url('@/assets/fonts/sora-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Sora'; font-style: normal; font-weight: 100 900; font-display: swap;
  src: url('@/assets/fonts/sora-ext.woff2') format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'JetBrains Mono'; font-style: normal; font-weight: 100 900; font-display: swap;
  src: url('@/assets/fonts/jetbrains-mono-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'JetBrains Mono'; font-style: normal; font-weight: 100 900; font-display: swap;
  src: url('@/assets/fonts/jetbrains-mono-ext.woff2') format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* tudo namespaced sob .shc para não vazar pro resto do site */
.shc {
  --line: rgba(120, 160, 255, .14);
  --blue: #1a6bff; --blue-bright: #3d82ff; --cyan: #5fd2ff;
  --white: #eef4ff; --muted: #8ca0c9; --muted-dim: #5e7099;
  --display: 'Sora', system-ui, sans-serif;
  --mono: 'JetBrains Mono', ui-monospace, monospace;
  position: fixed; inset: 0; z-index: 1000; overflow: hidden;
  font-family: var(--display); color: var(--white); background: #040a1c;
  -webkit-font-smoothing: antialiased;
}
.shc *, .shc *::before, .shc *::after { box-sizing: border-box; margin: 0; padding: 0; }
.shc #net { position: absolute; inset: 0; z-index: 0; display: block; }
.shc #confetti { position: absolute; inset: 0; z-index: 40; pointer-events: none; }
.shc .vignette { position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background: radial-gradient(120% 90% at 50% 8%, transparent 40%, rgba(2, 6, 18, .55) 100%); }
.shc .grain { position: absolute; inset: 0; z-index: 2; pointer-events: none; opacity: .045; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
.shc .stage { position: relative; z-index: 10; height: 100%; display: flex; flex-direction: column; padding: clamp(18px, 3vw, 40px); }

.shc header { display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-shrink: 0; }
.shc .brand { display: flex; align-items: center; gap: 16px; }
.shc .hub { width: 46px; height: 46px; flex-shrink: 0; }
.shc .brand-txt { line-height: 1; }
.shc .brand-txt .t1 { font-weight: 800; font-size: 1.18rem; letter-spacing: -.02em; }
.shc .brand-txt .t1 .hl { color: var(--blue-bright); }
.shc .brand-txt .t2 { font-family: var(--mono); font-size: .66rem; letter-spacing: .34em; text-transform: uppercase; color: var(--muted); margin-top: 5px; }
.shc .evt { font-family: var(--mono); font-size: .66rem; letter-spacing: .12em; color: var(--muted-dim); text-align: right; text-transform: uppercase; }
.shc .evt b { color: var(--cyan); font-weight: 500; }

.shc main { flex: 1; display: flex; align-items: center; justify-content: center; min-height: 0; position: relative; }

.shc .upload { width: min(580px, 92vw); }
.shc .tabs { display: flex; gap: 8px; margin-bottom: 14px; justify-content: center; }
.shc .tab { font-family: var(--mono); font-size: .72rem; letter-spacing: .08em; text-transform: uppercase;
  color: var(--muted); background: rgba(10, 22, 55, .42); border: 1px solid var(--line); border-radius: 12px;
  padding: 10px 18px; cursor: pointer; transition: .18s; }
.shc .tab:hover { color: var(--white); }
.shc .tab.on { color: #fff; background: rgba(26, 107, 255, .18); border-color: var(--blue); }

.shc .drop { display: block; text-align: center; border: 1.5px dashed var(--line); border-radius: 22px;
  padding: clamp(30px, 4vw, 52px) 38px; background: rgba(10, 22, 55, .42); backdrop-filter: blur(6px);
  transition: .25s; cursor: pointer; position: relative; overflow: hidden; }
.shc label.drop:hover, .shc .drop.over { border-color: var(--blue); background: rgba(26, 107, 255, .08); transform: translateY(-2px); }
.shc .drop.nohover { cursor: default; }
.shc .drop .ring { width: 74px; height: 74px; margin: 0 auto 22px; border-radius: 50%; display: grid; place-items: center;
  background: radial-gradient(circle, rgba(26, 107, 255, .25), transparent 70%); border: 1px solid rgba(61, 130, 255, .3); }
.shc .drop .ring svg { width: 34px; height: 34px; }
.shc .drop h1 { font-size: clamp(1.2rem, 2.4vw, 1.7rem); font-weight: 800; letter-spacing: -.025em; margin-bottom: 10px; }
.shc .drop p { color: var(--muted); font-size: .9rem; line-height: 1.55; max-width: 44ch; margin: 0 auto; }
.shc .drop .hint { margin-top: 18px; font-family: var(--mono); font-size: .7rem; letter-spacing: .1em; color: var(--muted-dim); text-transform: uppercase; }
.shc .drop .pick { display: inline-block; margin-top: 16px; font-family: var(--mono); font-size: .78rem; color: var(--blue-bright); border-bottom: 1px solid rgba(61, 130, 255, .4); padding-bottom: 2px; }
.shc #file { display: none; }
.shc #pasteArea { width: 100%; margin-top: 18px; min-height: 180px; resize: vertical; border-radius: 14px;
  background: rgba(4, 10, 28, .6); border: 1px solid var(--line); color: var(--white); padding: 14px 16px;
  font-family: var(--mono); font-size: .92rem; line-height: 1.7; outline: none; }
.shc #pasteArea:focus { border-color: var(--blue); }
.shc .err { margin-top: 16px; color: #ff7a8a; font-family: var(--mono); font-size: .78rem; display: none; text-align: center; }

.shc .panel { width: min(1080px, 94vw); display: none; flex-direction: column; align-items: center; gap: 28px; }
.shc .panel.show { display: flex; }
.shc .statline { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; font-family: var(--mono); }
.shc .stat { background: rgba(10, 22, 55, .5); border: 1px solid var(--line); border-radius: 12px; padding: 11px 18px; text-align: center; backdrop-filter: blur(4px); }
.shc .stat .n { font-family: var(--display); font-weight: 800; font-size: 1.5rem; line-height: 1; letter-spacing: -.02em; }
.shc .stat .l { font-size: .6rem; letter-spacing: .18em; text-transform: uppercase; color: var(--muted); margin-top: 6px; }
.shc .stat.elig .n { color: var(--cyan); }

.shc .reelwrap { position: relative; width: 100%; border-radius: 26px;
  background: linear-gradient(180deg, rgba(15, 35, 80, .55), rgba(6, 15, 36, .7)); border: 1px solid var(--line); overflow: hidden;
  box-shadow: 0 40px 120px -50px rgba(26, 107, 255, .5), inset 0 1px 0 rgba(255, 255, 255, .05);
  padding: clamp(34px, 6vh, 70px) 24px; min-height: clamp(220px, 38vh, 360px);
  display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
.shc .hubbg { position: absolute; inset: 0; display: grid; place-items: center; opacity: .12; pointer-events: none; }
.shc .hubbg svg { width: min(70%, 440px); height: auto; }
.shc .flash { position: absolute; inset: 0; border-radius: 26px; pointer-events: none; opacity: 0;
  background: radial-gradient(circle at 50% 50%, rgba(95, 210, 255, .55), rgba(26, 107, 255, .2) 40%, transparent 70%); }
.shc .flash.go { animation: shc-flash .9s ease-out; }
@keyframes shc-flash { 0% { opacity: 0; transform: scale(.6); } 18% { opacity: 1; } 100% { opacity: 0; transform: scale(1.25); } }

.shc .kicker { position: relative; font-family: var(--mono); font-size: .72rem; letter-spacing: .34em; text-transform: uppercase; color: var(--blue-bright); margin-bottom: 18px; min-height: 1em; }
.shc .name { position: relative; font-weight: 800; letter-spacing: -.03em; line-height: 1.02; font-size: clamp(2rem, 6.5vw, 5.2rem);
  background: linear-gradient(180deg, #fff, #bcd2ff); -webkit-background-clip: text; background-clip: text; color: transparent;
  transition: filter .1s, transform .1s; word-break: break-word; max-width: 18ch; }
.shc .name.spin { filter: blur(7px); opacity: .92; }
.shc .name.win { animation: shc-pop .55s cubic-bezier(.2, 1.4, .4, 1); }
.shc .name.idle { -webkit-text-fill-color: var(--muted); color: var(--muted); background: none; font-weight: 600; font-size: clamp(1.4rem, 3.5vw, 2.4rem); }
@keyframes shc-pop { 0% { transform: scale(.8); opacity: 0; filter: blur(10px); } 100% { transform: scale(1); opacity: 1; filter: blur(0); } }
.shc .meta { position: relative; font-family: var(--mono); font-size: .84rem; color: var(--muted); margin-top: 20px; min-height: 1.1em; letter-spacing: .04em; }
.shc .meta .tk { color: var(--cyan); }

.shc .controls { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; justify-content: center; }
.shc .qty { display: flex; align-items: center; gap: 10px; background: rgba(10, 22, 55, .5); border: 1px solid var(--line); border-radius: 14px; padding: 8px 10px 8px 16px; }
.shc .qty label { font-family: var(--mono); font-size: .66rem; letter-spacing: .16em; text-transform: uppercase; color: var(--muted); }
.shc .qty .stp { display: flex; align-items: center; gap: 4px; }
.shc .qty button { width: 32px; height: 32px; border-radius: 9px; border: 1px solid var(--line); background: rgba(26, 107, 255, .12); color: var(--white); font-size: 1.1rem; cursor: pointer; font-family: var(--display); line-height: 1; transition: .15s; }
.shc .qty button:hover { background: rgba(26, 107, 255, .3); border-color: var(--blue); }
.shc .qty .val { width: 42px; text-align: center; font-family: var(--display); font-weight: 800; font-size: 1.4rem; }

.shc .go-btn { position: relative; border: none; cursor: pointer; font-family: var(--display); font-weight: 800; font-size: 1.05rem; letter-spacing: .01em; color: #fff; padding: 16px 42px; border-radius: 16px;
  background: linear-gradient(135deg, var(--blue), #0b54e0);
  box-shadow: 0 16px 40px -12px rgba(26, 107, 255, .8), inset 0 1px 0 rgba(255, 255, 255, .25); transition: .18s; overflow: hidden; }
.shc .go-btn.small { font-size: .92rem; padding: 13px 30px; margin-top: 18px; }
.shc .go-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 22px 50px -12px rgba(26, 107, 255, .95); }
.shc .go-btn:active:not(:disabled) { transform: translateY(0); }
.shc .go-btn:disabled { opacity: .45; cursor: not-allowed; }
.shc .go-btn::after { content: ""; position: absolute; top: 0; left: -60%; width: 40%; height: 100%; background: linear-gradient(100deg, transparent, rgba(255, 255, 255, .4), transparent); transform: skewX(-20deg); animation: shc-sheen 3.4s infinite; }
.shc .go-btn:disabled::after { display: none; }
@keyframes shc-sheen { 0%, 60% { left: -60%; } 100% { left: 140%; } }

.shc .ghost { background: rgba(10, 22, 55, .4); border: 1px solid var(--line); color: var(--muted); font-family: var(--mono); font-size: .72rem; letter-spacing: .1em; text-transform: uppercase; padding: 13px 20px; border-radius: 14px; cursor: pointer; transition: .15s; }
.shc .ghost:hover:not(:disabled) { color: var(--white); border-color: var(--blue); }
.shc .ghost:disabled { opacity: .4; cursor: not-allowed; }
.shc .ghost.accent:not(:disabled) { color: var(--cyan); border-color: rgba(95, 210, 255, .35); background: rgba(95, 210, 255, .08); }
.shc .ghost.accent:not(:disabled):hover { color: #fff; border-color: var(--cyan); background: rgba(95, 210, 255, .16); }

.shc .toggle { display: flex; align-items: center; gap: 9px; font-family: var(--mono); font-size: .68rem; letter-spacing: .08em; color: var(--muted); text-transform: uppercase; cursor: pointer; user-select: none; }
.shc .toggle .sw { width: 38px; height: 21px; border-radius: 20px; background: rgba(120, 160, 255, .18); position: relative; transition: .2s; flex-shrink: 0; }
.shc .toggle .sw::after { content: ""; position: absolute; top: 2px; left: 2px; width: 17px; height: 17px; border-radius: 50%; background: var(--muted); transition: .2s; }
.shc .toggle.on .sw { background: rgba(26, 107, 255, .55); }
.shc .toggle.on .sw::after { left: 19px; background: #fff; }

.shc .winners { width: min(1080px, 94vw); margin-top: 4px; display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-height: 18vh; overflow: auto; padding: 2px; }
.shc .wchip { display: flex; align-items: center; gap: 10px; background: rgba(10, 22, 55, .55); border: 1px solid rgba(61, 130, 255, .28); border-radius: 999px; padding: 7px 16px 7px 8px; animation: shc-chipIn .4s ease-out backwards; }
@keyframes shc-chipIn { from { opacity: 0; transform: translateY(8px) scale(.9); } }
.shc .wchip .num { width: 24px; height: 24px; border-radius: 50%; background: var(--blue); display: grid; place-items: center; font-family: var(--mono); font-size: .7rem; font-weight: 700; color: #fff; }
.shc .wchip .wn { font-weight: 600; font-size: .9rem; }
.shc .wchip .wt { font-family: var(--mono); font-size: .66rem; color: var(--muted); }

.shc .mutebtn { position: absolute; top: 14px; right: 18px; z-index: 30; width: 38px; height: 38px; border-radius: 11px; display: none; place-items: center; background: rgba(10, 22, 55, .5); border: 1px solid var(--line); cursor: pointer; color: var(--muted); }
.shc .mutebtn.show { display: grid; }
.shc .mutebtn:hover { color: var(--white); border-color: var(--blue); }
.shc .mutebtn svg { width: 18px; height: 18px; }
.shc .backlink { position: absolute; top: 16px; left: 20px; z-index: 30; font-family: var(--mono); font-size: .7rem; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); text-decoration: none; padding: 8px 12px; border-radius: 10px; transition: .15s; }
.shc .backlink:hover { color: var(--white); background: rgba(26, 107, 255, .12); }

@media (max-width: 640px) {
  .shc .evt { display: none; }
  .shc .winners { max-height: 24vh; }
}
</style>
