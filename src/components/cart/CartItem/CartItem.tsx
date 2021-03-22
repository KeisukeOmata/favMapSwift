import { FC } from 'react'
import { CartItemImage, CartItemDetail } from 'components/cart'
import { Sku } from 'lib/Type'
import s from './CartItem.module.scss'

type Props = {
  item: {
    title: string
    variant: Sku
    quantity: number
    id: string
  }
}

export const CartItem: FC<Props> = ({ item }) => {
  return (
    <>
      <div className={s.items} key={item.id}>
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
