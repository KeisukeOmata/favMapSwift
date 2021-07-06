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
