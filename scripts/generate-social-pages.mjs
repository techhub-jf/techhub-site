import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const docsDir = resolve(process.cwd(), 'docs')
const sourcePath = resolve(docsDir, 'index.html')
const confPath = resolve(docsDir, 'conf', 'index.html')

const sourceHtml = await readFile(sourcePath, 'utf8')

const replacements = [
  ['<meta name="description" content="A sua comunidade tech em Juiz de Fora e região!" />', '<meta name="description" content="Tech Hub Conf: o maior evento tech de Juiz de Fora e região." />'],
  ['<link rel="canonical" href="https://techhubjf.org/" />', '<link rel="canonical" href="https://techhubjf.org/conf" />'],
  ['<meta property="og:title" content="Tech Hub JF" />', '<meta property="og:title" content="Tech Hub Conf | Tech Hub JF" />'],
  ['<meta property="og:url" content="https://techhubjf.org/" />', '<meta property="og:url" content="https://techhubjf.org/conf" />'],
  ['<meta property="og:description" content="A sua comunidade tech em Juiz de Fora e região!" />', '<meta property="og:description" content="Tech Hub Conf: o maior evento tech de Juiz de Fora e região." />'],
  ['<meta name="twitter:title" content="Tech Hub JF" />', '<meta name="twitter:title" content="Tech Hub Conf | Tech Hub JF" />'],
  ['<meta name="twitter:description" content="A sua comunidade tech em Juiz de Fora e região!" />', '<meta name="twitter:description" content="Tech Hub Conf: o maior evento tech de Juiz de Fora e região." />'],
  ['<title>Tech Hub JF</title>', '<title>Tech Hub Conf | Tech Hub JF</title>']
]

let confHtml = sourceHtml
for (const [from, to] of replacements) {
  confHtml = confHtml.replace(from, to)
}

await mkdir(resolve(docsDir, 'conf'), { recursive: true })
await writeFile(confPath, confHtml, 'utf8')
