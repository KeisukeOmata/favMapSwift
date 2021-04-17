import { FC, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import s from './Button.module.css'

type Props = {
  className?: string
  color?: string
  shape: 'square' | 'circle'
  choose?: boolean
  loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({
  className,
  color,
  shape,
  choose,
  loading,
  ...rest
}) => {
  const getColorClass = (color: string | undefined): string => {
    switch (color) {
      case 'Black':
        return s.black
      case 'White':
        return s.white
      case 'Brown':
        return s.brown
      case 'Charcoal':
        return s.charcoal
      case 'Chocolate':
        return s.chocolate
      case 'Grey':
        return s.grey
      case 'Light Grey':
        return s.lightGrey
      case 'Taupe Marl':
        return s.taupeMarl
      case 'Ink':
        return s.ink
      case 'Light Grey Marl':
        return s.lightGreyMarl
      case 'Cadet Green':
        return s.cadetGreen
      case 'Cinder Marl':
        return s.cinderMarl
      case 'Taupe':
        return s.taupe
      case 'Military':
        return s.military
      case 'Grey Marl':
        return s.greyMarl
      case 'Deep Ocean':
        return s.deepOcean
      case 'Vintage Black':
        return s.vintageBlack
      case 'Chalk White':
        return s.chalkWhite
      case 'Nights':
        return s.nights
      case 'Optic White':
        return s.opticWhite
      case 'Tempest Blue':
        return s.tempestBlue
      case 'Olive Green':
        return s.oliveGreen
      case 'Putty':
        return s.putty
      case 'Ivory':
        return s.ivory
      case 'Red':
        return s.red
      case 'Green':
        return s.green
      default:
        return s.default
    }
  }
  const getChooseClass = (choose: boolean | undefined): string => {
    switch (choose) {
      case true:
        return s.choose
      case false:
        return s.notChoose
      default:
        return s.choose
    }
  }

  const colorClass = getColorClass(color)
  const chooseClass = getChooseClass(choose)

  return (
    <button
      className={cn(
        className,
        colorClass,
        shape === 'square' ? s.square : s.circle,
        chooseClass,
        loading && s.loading
      )}
      disabled={loading}
      {...rest}
    ></button>
  )
}
