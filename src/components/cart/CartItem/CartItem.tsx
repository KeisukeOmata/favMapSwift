import { FC } from 'react'
import { CartItemImage, CartItemDetail } from 'components/cart'
import { LineItem } from 'lib/Type'
import { resetCheckoutId } from 'lib/helpers'
import s from './CartItem.module.css'

type Props = {
  item: LineItem
}

export const CartItem: FC<Props> = ({ item }) => {
  return (
    <>
      {item.variant ? (
        <>
          <div className="flex justify-between flex-wrap">
            <div className={s.item}>
              <CartItemImage cartItem={item} />
            </div>
            <div className={s.item}>
              <CartItemDetail cartItem={item} />
            </div>
          </div>
        </>
      ) : (
        // Reset cart because product information is outdated
        resetCheckoutId()
      )}
    </>
  )
}
