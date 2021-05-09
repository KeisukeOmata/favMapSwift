import Link from 'next/link'
import { FC } from 'react'
import { useRecoilQuantity, useRecoilFocusItem } from 'lib/hooks/state'

export const CartLink: FC = () => {
  const { getQuantityState } = useRecoilQuantity()
  const quantityState = getQuantityState()
  const { setFocusItemState } = useRecoilFocusItem()

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
