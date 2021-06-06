import { FC } from 'react'
import { CartItemImage, CartItemDetail } from 'components/cart'
import { LineItem } from 'lib/Type'
import s from './CartItem.module.css'

type Props = {
  item: LineItem
}

export const CartItem: FC<Props> = ({ item }) => (
  <>
    <div className="flex flex-wrap justify-between">
      <div className={s.item}>
        <CartItemImage cartItem={item} />
      </div>
      <div className={s.item}>
        <CartItemDetail cartItem={item} />
      </div>
    </div>
  </>
)
