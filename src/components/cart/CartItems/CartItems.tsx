import Link from 'next/link'
import { FC } from 'react'
import { CartItem } from 'components/cart'
import { Button } from 'components/ui'
import { useCart } from 'lib/hooks/useCart'
import { resetCheckoutId } from 'lib/helpers'
import { Cart } from 'lib/Type'
import s from './CartItems.module.scss'

export const CartItems: FC = () => {
  const { cart } = useCart()
  const moveToShopify = (cart: Cart): void => {
    // Move to Shopify
    window.open(cart.webUrl)
    // Delete checkoutId from local storage
    resetCheckoutId()
  }

  return (
    cart && (
      <>
        {cart.lineItems.length === 0 ? (
          <div className={s.cartSectionTitleContainer}>
            <h2>BAGが空です</h2>
          </div>
        ) : (
          <>
            <div className={s.cartSectionTitleContainer}>
              <h2>BAG</h2>
            </div>
            {cart.lineItems.map((item, i) => (
              <CartItem item={item} key={i} />
            ))}
            <div className={s.item}>
              <p className={s.item__price}>合計: ¥{cart.subtotalPrice}</p>
            </div>
            <div className={s.item}>
              <Link href={`/`}>
                <Button
                  shape="square"
                  type="button"
                  aria-label="お会計に進む"
                  onClick={() => moveToShopify(cart)}
                >
                  購入する
                </Button>
              </Link>
            </div>
          </>
        )}
      </>
    )
  )
}
