import cn from 'classnames'
import { getColorClass, getChooseClass } from 'lib/helper/components'
import { FC, ButtonHTMLAttributes, Ref } from 'react'

import s from './Button.module.css'

type Props = {
  choose?: boolean
  className?: string
  color?: string
  forwardRef?: Ref<HTMLButtonElement>
  loading?: boolean
  shape: 'square' | 'circle'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({ choose, className, color, forwardRef, loading, shape, ...rest }) => {
  const colorClass = getColorClass(color)
  const chooseClass = getChooseClass(choose)

  return (
    <button
      ref={forwardRef}
      className={cn(className, colorClass, shape === 'square' ? s.square : s.circle, chooseClass, loading && s.loading)}
      disabled={loading}
      {...rest}
    ></button>
  )
}
