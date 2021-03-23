import { FC } from 'react'
import { CartItemImage, CartItemDetail } from 'components/cart'
import { LineItem } from 'lib/Type'
import s from './CartItem.module.scss'

type Props = {
  item: LineItem
}

export const CartItem: FC<Props> = ({ item }) => {
  return (
    <>
      <div className={s.items}>
        <div className={s.item}>
          <CartItemImage cartItem={item} />
        </div>
        <div className={s.item}>
          <CartItemDetail cartItem={item} />
        </div>
      </div>
    </>
  )
}
