import { describe, it, expect } from 'vitest'
import { projects } from './projects'

describe('projects data', () => {
  it('la demo de DataInsight AI apunta a /demo', () => {
    const dataInsight = projects.find((project) => project.title === 'DataInsight AI')
    expect(dataInsight.demoUrl).toBe('https://data-insight-ai-qbh4.vercel.app/demo')
  })
})
