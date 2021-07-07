/**
 * @jest-environment jsdom
 */

import { resetCheckoutId } from 'lib/helper/cart'

import { localStorageMock } from '../../../../mock/localStorageMock'

describe('resetCheckoutId', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    })
  })

  test('checkoutId', () => {
    localStorage.setItem('checkoutId', 'test')
    resetCheckoutId()
    const checkoutId = localStorage.getItem('checkoutId')
    expect(checkoutId).toBe(null)
  })
})
