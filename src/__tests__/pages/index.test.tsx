import Home from 'pages/index'
// Avoid conflicts with cypress
import { expect } from '@jest/globals'

it('The Home component is present', () => {
  expect(Home).toBeTruthy()
})
