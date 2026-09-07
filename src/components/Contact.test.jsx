import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'

describe('Contact', () => {
  it('el botón "Copiar dirección" escribe el email en el portapapeles', async () => {
    // userEvent.setup() instala su propio stub de navigator.clipboard, así
    // que el mock debe definirse después de llamarlo o quedaría sobrescrito.
    const user = userEvent.setup()
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    })

    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /copiar dirección/i }))

    expect(writeText).toHaveBeenCalledWith('escolanomartinborja@gmail.com')
  })
})
