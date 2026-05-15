import sharp from 'sharp'
import { readdirSync, statSync } from 'node:fs'
import { join, parse } from 'node:path'

const ASSETS_DIR = 'src/assets'
const MIN_SIZE = 0
const MAX_DIM = 800
const QUALITY = 80

const SKIP = new Set([
  'logo-dark.png',
  'logo-moinho.png',
  'tech-hub-jf.png',
  'gde-logo.png',
  'bytes-brejas.png',
  'rubeus.png',
  'buffet.png',
  'm3-oculos.png',
  '4linux.png',
  'ensine.png',
  'jetbrains.png',
  'elastic.png',
  'mais-laudo.png',
])

const OVERRIDES = {
  'moinho.png': { width: 1920, height: 1920 },
  'tech-hub-conf.jpg': { width: 1920, height: 1920 },
}

const files = readdirSync(ASSETS_DIR).filter(
  (f) => /\.(jpe?g|png)$/i.test(f) && !SKIP.has(f),
)

const fmt = (bytes) =>
  bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
    : `${(bytes / 1024).toFixed(0)} KB`

let processed = 0
let totalIn = 0
let totalOut = 0

for (const file of files) {
  const src = join(ASSETS_DIR, file)
  const stat = statSync(src)
  if (stat.size < MIN_SIZE) continue

  const { name } = parse(file)
  const out = join(ASSETS_DIR, `${name}.webp`)

  try {
    const outStat = statSync(out)
    if (outStat.mtimeMs >= stat.mtimeMs) {
      console.log(`skip ${file} (webp up to date)`)
      continue
    }
  } catch {}

  const { width = MAX_DIM, height = MAX_DIM } = OVERRIDES[file] ?? {}
  await sharp(src)
    .resize({ width, height, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out)

  const outSize = statSync(out).size
  totalIn += stat.size
  totalOut += outSize
  processed++
  console.log(`${file}: ${fmt(stat.size)} → ${name}.webp ${fmt(outSize)}`)
}

console.log(
  `\n${processed} files. total ${fmt(totalIn)} → ${fmt(totalOut)} (saved ${fmt(totalIn - totalOut)})`,
)
