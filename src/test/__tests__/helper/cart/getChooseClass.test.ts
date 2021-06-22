import s from 'components/ui/Button/Button.module.css'
import { getChooseClass } from 'lib/helper/components'

describe('getChooseClass', () => {
  test('true', () => {
    const chooseClass = getChooseClass(true)
    expect(chooseClass).toBe(s.choose)
  })
  test('false', () => {
    const chooseClass = getChooseClass(false)
    expect(chooseClass).toBe(s.notChoose)
  })
  test('undefined', () => {
    const chooseClass = getChooseClass(undefined)
    expect(chooseClass).toBe(s.choose)
  })
})
