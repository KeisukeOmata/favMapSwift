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
    test('Other case', () => {
      const other = getColor('dark', 'other')
      expect(other).toBe('currentColor')
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
    test('Other case', () => {
      const other = getColor('light', 'other')
      expect(other).toBe('currentColor')
    })
  })

  describe('Other case', () => {
    test('colorState is Black', () => {
      const color = getColor('other', 'Black')
      expect(color).toBe('currentColor')
    })
    test('colorState is White', () => {
      const other = getColor('other', 'White')
      expect(other).toBe('black')
    })
    test('Other case', () => {
      const other = getColor('other', 'other')
      expect(other).toBe('currentColor')
    })
  })
})
