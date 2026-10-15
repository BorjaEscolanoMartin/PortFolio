import { describe, it, expect } from 'vitest'
import { skillGroups } from './skills'

describe('skillGroups data', () => {
  it('no repite nombres de items entre grupos', () => {
    const allNames = skillGroups.flatMap((group) => group.items.map((item) => item.name))
    const uniqueNames = new Set(allNames)
    expect(uniqueNames.size).toBe(allNames.length)
  })

  it('cada grupo tiene un summary no vacío en español e inglés', () => {
    skillGroups.forEach((group) => {
      for (const lang of ['es', 'en']) {
        expect(typeof group.summary[lang]).toBe('string')
        expect(group.summary[lang].trim().length).toBeGreaterThan(0)
      }
    })
  })

  it('cada título es compartido o tiene versión en español e inglés', () => {
    skillGroups.forEach((group) => {
      if (typeof group.title === 'string') return
      expect(group.title.es).toBeTruthy()
      expect(group.title.en).toBeTruthy()
    })
  })

  it('cada grupo tiene id, title e items no vacíos', () => {
    skillGroups.forEach((group) => {
      expect(group.id).toBeTruthy()
      expect(group.title).toBeTruthy()
      expect(Array.isArray(group.items)).toBe(true)
      expect(group.items.length).toBeGreaterThan(0)
    })
  })
})
