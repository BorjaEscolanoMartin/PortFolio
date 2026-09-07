import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Projects from './Projects'
import { projects } from '../data/projects'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.resolve(__dirname, '../../public')

describe('Projects', () => {
  it('muestra las 9 tarjetas de proyecto por defecto', () => {
    render(<Projects />)
    const images = screen.getAllByAltText(/^Captura del proyecto/)
    expect(images).toHaveLength(9)
  })

  it('el filtro "Web" muestra solo los proyectos con categoría web', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('button', { name: 'Web' }))

    const expected = projects.filter((p) => p.categories.includes('web'))
    const images = screen.getAllByAltText(/^Captura del proyecto/)
    expect(images).toHaveLength(expected.length)
    expected.forEach((p) => {
      expect(screen.getByText(p.title)).toBeInTheDocument()
    })
  })

  it('el filtro "Datos e IA" muestra solo los proyectos con categoría datos-ia', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('button', { name: 'Datos e IA' }))

    const expected = projects.filter((p) => p.categories.includes('datos-ia'))
    const images = screen.getAllByAltText(/^Captura del proyecto/)
    expect(images).toHaveLength(expected.length)
    expected.forEach((p) => {
      expect(screen.getByText(p.title)).toBeInTheDocument()
    })
  })

  it('un proyecto sin githubUrl no renderiza enlace de GitHub', () => {
    render(<Projects />)
    const tuytu = projects.find((p) => p.title === 'TuyTu Tech')
    expect(tuytu.githubUrl).toBeNull()

    const title = screen.getByText('TuyTu Tech')
    const card = title.closest('.group')
    expect(within(card).queryByText('GitHub')).not.toBeInTheDocument()
  })

  it('un proyecto con reportUrl renderiza el enlace "Informe (PDF)"', () => {
    render(<Projects />)
    const withReport = projects.find((p) => p.reportUrl)
    expect(withReport, 'hace falta al menos un proyecto con reportUrl').toBeTruthy()

    const card = screen.getByText(withReport.title).closest('.group')
    const link = within(card).getByRole('link', { name: /Informe \(PDF\)/ })
    expect(link).toHaveAttribute('href', withReport.reportUrl)
  })

  it('todas las imágenes de los proyectos existen en public/', () => {
    projects.forEach((project) => {
      const filename = path.basename(project.image)
      const filePath = path.join(publicDir, filename)
      expect(fs.existsSync(filePath), `falta ${filename} en public/`).toBe(true)
    })
  })
})
