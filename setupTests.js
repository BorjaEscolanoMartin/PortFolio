import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Sin `test.globals: true` en vitest.config.js, @testing-library/react no
// detecta el hook `afterEach` global y no desmonta los componentes entre
// tests. Lo registramos explícitamente para evitar fugas del DOM.
afterEach(() => {
  cleanup()
})
