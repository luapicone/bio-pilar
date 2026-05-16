import { cpSync, existsSync, mkdirSync, rmSync, copyFileSync } from 'node:fs'

const dist = new URL('../dist/', import.meta.url)
rmSync(dist, { recursive: true, force: true })
mkdirSync(dist, { recursive: true })
copyFileSync(new URL('../index.html', import.meta.url), new URL('../dist/index.html', import.meta.url))
if (existsSync(new URL('../public', import.meta.url))) {
  cpSync(new URL('../public', import.meta.url), new URL('../dist', import.meta.url), { recursive: true })
}
console.log('Static replica copied to dist/')
