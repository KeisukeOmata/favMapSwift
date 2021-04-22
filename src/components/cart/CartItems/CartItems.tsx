import Link from 'next/link'
import { FC, useRef, forwardRef, ButtonHTMLAttributes } from 'react'
import { CartItem } from 'components/cart'
import { Button } from 'components/ui'
import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { resetCheckoutId } from 'lib/helpers'
import { Cart } from 'lib/Type'
import s from './CartItems.module.css'

type RefProps = {
  className?: string
  color?: string
  shape: 'square' | 'circle'
  choose?: boolean
  loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

// eslint-disable-next-line react/display-name
const RefButton = forwardRef<HTMLButtonElement, RefProps>(
  ({ ...props }, ref) => {
    return <Button {...props} forwardRef={ref} />
  }
)

export const CartItems: FC = () => {
  const ref = useRef<HTMLButtonElement>(null)
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
            <p className={s.total}>合計: {cart.subtotalPrice}円</p>
            <div className="flex flex-col justify-center">
              <Link href="/" passHref>
                <RefButton
                  ref={ref}
                  shape="square"
                  type="button"
                  aria-label="お会計に進む"
                  onClick={() => moveToShopify(cart)}
                >
                  購入する
                </RefButton>
              </Link>
            </div>
          </>
        )}
      </>
    )
  )
}
