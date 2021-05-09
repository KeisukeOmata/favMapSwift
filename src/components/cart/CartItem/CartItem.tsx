import { FC, memo } from 'react'
import { CartItemImage, CartItemDetail } from 'components/cart'
import { LineItem } from 'lib/Type'
import s from './CartItem.module.css'

type Props = {
  item: LineItem
}

export const CartItem: FC<Props> = memo(({ item }) => {
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
        localStorage.removeItem('checkoutId')
      )}
    </>
  )
})

CartItem.displayName = 'CartItem'
