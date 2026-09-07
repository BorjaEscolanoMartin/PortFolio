import { describe, it, expect } from 'vitest'
import { skillGroups } from './skills'

describe('skillGroups data', () => {
  it('no repite nombres de items entre grupos', () => {
    const allNames = skillGroups.flatMap((group) => group.items.map((item) => item.name))
    const uniqueNames = new Set(allNames)
    expect(uniqueNames.size).toBe(allNames.length)
  })

  it('cada grupo tiene un summary no vacío', () => {
    skillGroups.forEach((group) => {
      expect(typeof group.summary).toBe('string')
      expect(group.summary.trim().length).toBeGreaterThan(0)
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
