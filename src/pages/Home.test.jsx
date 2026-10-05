import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Home from './Home'

describe('Home', () => {
  it('el fondo de "Sobre mí" en adelante es un SVG vectorial que se repite en vertical', () => {
    const { container } = render(<Home />)
    const fondo = container.querySelector('#sobre-mi').parentElement

    // Un bitmap con background-size: cover se amplía hasta ×9 en móvil y se
    // pixela; el SVG en mosaico vertical se mantiene nítido a cualquier alto.
    expect(fondo.style.backgroundImage).toMatch(/fondo-ondas\.svg/)
    expect(fondo.style.backgroundRepeat).toBe('repeat-y')
  })
})
