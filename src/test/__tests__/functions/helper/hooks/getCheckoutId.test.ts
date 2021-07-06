/**
 * @jest-environment jsdom
 */

import { getCheckoutId } from 'lib/helper/hooks'

import { localStorageMock } from '../../../../mock/localStorageMock'

describe('getCheckoutId', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    })
  })

  test('checkoutId', () => {
    localStorage.setItem('checkoutId', 'test')
    const checkoutId = getCheckoutId()
    expect(checkoutId).toBe('test')
  })
})
