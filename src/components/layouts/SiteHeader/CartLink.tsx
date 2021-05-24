import Link from 'next/link'
import { FC } from 'react'

type Props = {
  quantityState: number
  setFocusItemState: (focusItemState: string | null) => void
}

export const CartLink: FC<Props> = ({ quantityState, setFocusItemState }) => (
  <Link href={'/cart'} passHref>
    <button
      aria-label="カートを表示する"
      onClick={() => setFocusItemState(null)}
    >
      BAG({quantityState})
    </button>
  </Link>
)
