import s from 'components/ui/Button/Button.module.css'

export const getChooseClass = (choose: boolean | undefined): string => {
  switch (choose) {
    case true:
      return s.choose
    case false:
      return s.notChoose
    default:
      return s.choose
  }
}
