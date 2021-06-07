import { getColor } from 'lib/helper/components'

describe('getColor', () => {
  describe('theme is dark', () => {
    test('colorState is Black', () => {
      const color = getColor('dark', 'Black')
      expect(color).toBe('white')
    })
    test('colorState is White', () => {
      const color = getColor('dark', 'White')
      expect(color).toBe('currentColor')
    })
    test('colorState is Ivory', () => {
      const color = getColor('dark', 'Ivory')
      expect(color).toBe('currentColor')
    })
  })

  describe('theme is light', () => {
    test('colorState is Black', () => {
      const color = getColor('light', 'Black')
      expect(color).toBe('currentColor')
    })
    test('colorState is White', () => {
      const color = getColor('light', 'White')
      expect(color).toBe('black')
    })
    test('colorState is Ivory', () => {
      const color = getColor('light', 'Ivory')
      expect(color).toBe('black')
    })
  })
})
