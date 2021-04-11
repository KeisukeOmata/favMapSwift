import Link from 'next/link'
import { FC } from 'react'
import { CartItem } from 'components/cart'
import { Button } from 'components/ui'
import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { resetCheckoutId } from 'lib/helpers'
import { Cart } from 'lib/Type'

export const CartItems: FC = () => {
  const { getCartState } = useRecoilCart()
  const cart = getCartState()
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
          <div className="under-line flex py-1.5">
            <h2 id="heading" tabIndex={-1}>
              BAGが空です
            </h2>
          </div>
        ) : (
          <>
            <div className="under-line flex py-1.5">
              <h2 id="heading" tabIndex={-1}>
                BAG
              </h2>
            </div>
            {cart.lineItems.map((item, i) => (
              <CartItem item={item} key={i} />
            ))}
            <p className="pt-5 flex flex-col justify-center text-center">
              合計: {cart.subtotalPrice}円
            </p>
            <div className="pt-5 flex flex-col justify-center">
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
