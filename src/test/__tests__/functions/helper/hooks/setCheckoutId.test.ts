/**
 * @jest-environment jsdom
 */

import { setCheckoutId } from 'lib/helper/hooks'

import { localStorageMock } from '../../../../mock/localStorageMock'

describe('setCheckoutId', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    })
  })

  test('checkoutId', () => {
    setCheckoutId('test')
    const checkoutId = localStorage.getItem('checkoutId')
    expect(checkoutId).toBe('test')
  })
})
