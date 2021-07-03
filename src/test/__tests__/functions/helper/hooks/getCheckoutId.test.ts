/**
 * @jest-environment jsdom
 */

import { getCheckoutId } from 'lib/helper/hooks'

type localStorageMockType = {
  [key: string]: string
}

export const localStorageMock = (() => {
  let store: localStorageMockType = { key: '', value: '' }

  return {
    getItem(key: string) {
      return store[key] || null
    },
    setItem(key: string, value: string) {
      store[key] = value
    },
    removeItem(key: string) {
      delete store[key]
    },
    clear() {
      store = { key: '', value: '' }
    },
  }
})()

describe('getCheckoutId', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    })
  })

  test('checkoutId', () => {
    const value = getCheckoutId()
    expect(value).toBe('')
  })
})
