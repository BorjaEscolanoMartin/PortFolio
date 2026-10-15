import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skills from './Skills'
import { skillGroups } from '../data/skills'
import { localize } from '../i18n/localize'
import { renderInLanguage } from '../test-utils'

describe('Skills', () => {
  it('renderiza el título de cada grupo de competencias', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('COMPETENCIAS')
    skillGroups.forEach((group) => {
      expect(screen.getByText(localize(group.title, 'es'))).toBeInTheDocument()
    })
  })

  it('renderiza títulos y resúmenes en inglés con ?lang=en', () => {
    renderInLanguage(<Skills />, 'en')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('SKILLS')
    expect(screen.getByText('Backend & databases')).toBeInTheDocument()
    skillGroups.forEach((group) => {
      expect(screen.getByText(localize(group.title, 'en'))).toBeInTheDocument()
      expect(screen.getByText(localize(group.summary, 'en'))).toBeInTheDocument()
    })
  })
})
