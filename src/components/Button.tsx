import * as React from 'react'

type Props = {
  text: string
}

const button: React.FC<Props> = ({ text }: Props) => {
  return <button>{text}</button>
}

export default button
