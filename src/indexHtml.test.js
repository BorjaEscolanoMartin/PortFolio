import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ui } from './i18n/ui'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8')

describe('index.html', () => {
  it('se sirve en español y anuncia la versión en inglés', () => {
    expect(html).toContain('<html lang="es">')
    expect(html).toContain('<meta property="og:locale" content="es_ES" />')
    expect(html).toContain('<meta property="og:locale:alternate" content="en_GB" />')
  })

  it('el título coincide con el del diccionario en español', () => {
    expect(html).toContain(`<title>${ui.es.meta.title}</title>`)
  })
})
