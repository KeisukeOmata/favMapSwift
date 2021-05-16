import Link from 'next/link'
import { FC } from 'react'
import { useRecoilQuantity, useRecoilFocusItem } from 'lib/hooks/state'
import { useFetchCart } from 'lib/hooks/cart'

export const CartLink: FC = () => {
  const { getQuantityState } = useRecoilQuantity()
  const quantityState = getQuantityState()
  const { setFocusItemState } = useRecoilFocusItem()
  useFetchCart()

  return (
    <Link href={'/cart'} passHref>
      <button
        aria-label="カートを表示する"
        onClick={() => setFocusItemState(null)}
      >
        BAG({quantityState})
      </button>
    </Link>
  )
}
