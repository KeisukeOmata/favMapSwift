import cn from 'classnames'
import { CheckMark } from 'components/icons'
import { Loading } from 'components/ui/Loading'
import { getColorClass, getChooseClass } from 'lib/helper/components'
import { FC, ButtonHTMLAttributes, Ref } from 'react'

import s from './Button.module.css'

type Props = {
  text?: string
  choose?: boolean
  className?: string
  color?: string
  forwardRef?: Ref<HTMLButtonElement>
  loading?: boolean
  shape: 'square' | 'circle'
  checkMark?: boolean
  colorState?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({
  text,
  choose,
  className,
  color,
  forwardRef,
  loading,
  shape,
  checkMark,
  colorState,
  ...rest
}) => {
  const colorClass = getColorClass(color)
  const chooseClass = getChooseClass(choose)

  return (
    <button
      ref={forwardRef}
      className={cn(className, colorClass, shape === 'square' ? s.square : s.circle, chooseClass, loading && s.loading)}
      disabled={loading}
      {...rest}
    >
      {checkMark ? <CheckMark colorState={colorState} /> : null}
      {loading ? <Loading /> : text}
    </button>
  )
}
