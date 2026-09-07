import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skills from './Skills'
import { skillGroups } from '../data/skills'

describe('Skills', () => {
  it('renderiza el título de cada grupo de competencias', () => {
    render(<Skills />)
    skillGroups.forEach((group) => {
      expect(screen.getByText(group.title)).toBeInTheDocument()
    })
  })
})
