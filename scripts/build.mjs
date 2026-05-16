import { cpSync, existsSync, mkdirSync, rmSync, copyFileSync } from 'node:fs'

const root = new URL('../', import.meta.url)
const dist = new URL('../dist/', import.meta.url)

rmSync(dist, { recursive: true, force: true })
mkdirSync(dist, { recursive: true })

for (const file of ['index.html']) {
  copyFileSync(new URL(`../${file}`, import.meta.url), new URL(`../dist/${file}`, import.meta.url))
}

for (const dir of ['assets', 'data']) {
  const from = new URL(`../${dir}`, import.meta.url)
  if (existsSync(from)) {
    cpSync(from, new URL(`../dist/${dir}`, import.meta.url), { recursive: true })
  }
}

console.log('Static replica copied to dist/')
