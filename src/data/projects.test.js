import { describe, it, expect } from 'vitest'
import { projects } from './projects'

describe('projects data', () => {
  it('el enlace de DataInsight AI apunta al login', () => {
    const dataInsight = projects.find((project) => project.title === 'DataInsight AI')
    expect(dataInsight.demoUrl).toBe('https://data-insight-ai-qbh4.vercel.app/login')
  })

  it('cada estado es una de las claves conocidas', () => {
    const keys = ['completed', 'in-progress', 'coming-soon']
    projects.forEach((project) => {
      expect(keys, `${project.id}`).toContain(project.status)
    })
  })

  it('los campos traducibles tienen versión en español e inglés', () => {
    projects.forEach((project) => {
      for (const field of ['title', 'description', 'note']) {
        const value = project[field]
        if (value === undefined || typeof value === 'string') continue
        expect(value.es, `${project.id}.${field}.es`).toBeTruthy()
        expect(value.en, `${project.id}.${field}.en`).toBeTruthy()
      }
      expect(typeof project.description, `${project.id}.description`).toBe('object')
    })
  })
})
