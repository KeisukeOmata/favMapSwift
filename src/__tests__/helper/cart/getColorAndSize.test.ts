import { getColorAndSize } from 'lib/helper/cart'
import { SelectedOption } from 'lib/Type'

describe('getColorAndSize', () => {
  let option: SelectedOption[]
  beforeAll(() => {
    option = [
      { name: 'Color', value: 'Black' },
      { name: 'Size', value: 'S' },
    ]
  })
  test('Color', () => {
    const color = getColorAndSize(option, 'Color')
    expect(color).toBe('Black')
  })
  test('Size', () => {
    const size = getColorAndSize(option, 'Size')
    expect(size).toBe('S')
  })
  test('Other case', () => {
    const other = getColorAndSize(option, 'Other')
    expect(other).toBe('')
  })
})
