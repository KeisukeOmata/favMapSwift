import cn from 'classnames'
import { FC, Ref } from 'react'

type Props = {
  id?: string
  head: string
  headRef?: Ref<HTMLHeadingElement>
  option?: string
  optionClassName?: string
}

export const Head: FC<Props> = ({ id, head, headRef, option, optionClassName }) => {
  return (
    <div className={cn('flex py-1.5 under-line', optionClassName)}>
      <h2 id={id} ref={headRef} tabIndex={-1}>
        {head}
      </h2>
      {option ? <h2>{option}</h2> : null}
    </div>
  )
}
