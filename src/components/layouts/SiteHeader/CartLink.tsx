import Link from 'next/link'
import { FC } from 'react'
import { useRecoilQuantity } from 'lib/hooks/state'

export const CartLink: FC = () => {
  const { quantityState } = useRecoilQuantity()

  return (
    <Link href={'/cart'} passHref>
      <button aria-label="カートを表示する">BAG({quantityState})</button>
    </Link>
  )
}
