import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'
import { renderInLanguage } from '../test-utils'

function mockClipboard() {
  const writeText = vi.fn().mockResolvedValue(undefined)
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText },
    configurable: true,
  })
  return writeText
}

describe('Contact', () => {
  it('el botón "Copiar dirección" escribe el email en el portapapeles', async () => {
    // userEvent.setup() instala su propio stub de navigator.clipboard, así
    // que el mock debe definirse después de llamarlo o quedaría sobrescrito.
    const user = userEvent.setup()
    const writeText = mockClipboard()

    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /copiar dirección/i }))

    expect(writeText).toHaveBeenCalledWith('escolanomartinborja@gmail.com')
  })

  it('prepara el mensaje en español por defecto', () => {
    render(<Contact />)
    const mailto = screen.getByRole('link', { name: 'Enviar email' }).getAttribute('href')
    expect(mailto).toContain(encodeURIComponent('Contacto desde tu Portfolio'))
  })
})

describe('Contact en inglés', () => {
  it('traduce los textos y el botón de copiar', async () => {
    const user = userEvent.setup()
    const writeText = mockClipboard()

    renderInLanguage(<Contact />, 'en')

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('CONTACT')
    expect(screen.getByRole('heading', { name: 'Contact Information' })).toBeInTheDocument()
    expect(screen.getByText('03660 Novelda, Alicante, Spain')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Copy address' }))

    expect(writeText).toHaveBeenCalledWith('escolanomartinborja@gmail.com')
    expect(screen.getByRole('button', { name: 'Email copied!' })).toBeInTheDocument()
  })

  it('prepara el email, Gmail y WhatsApp con el mensaje en inglés', () => {
    renderInLanguage(<Contact />, 'en')

    const subject = encodeURIComponent('Contact from your portfolio')
    expect(screen.getByRole('link', { name: 'Send email' }).getAttribute('href')).toContain(subject)
    expect(screen.getByRole('link', { name: 'Open in Gmail' }).getAttribute('href')).toContain(subject)
    expect(screen.getByRole('link', { name: 'Message on WhatsApp' }).getAttribute('href')).toContain(
      encodeURIComponent("Hi Borja, I'm writing to you from your portfolio..."),
    )
  })
})
