import { describe, it, expect } from 'vitest'
import { projects } from './projects'

describe('projects data', () => {
  it('el enlace de DataInsight AI apunta al login', () => {
    const dataInsight = projects.find((project) => project.title === 'DataInsight AI')
    expect(dataInsight.demoUrl).toBe('https://data-insight-ai-qbh4.vercel.app/login')
  })
})
