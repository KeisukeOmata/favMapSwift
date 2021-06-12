import Link from 'next/link'
import { FC, Ref, forwardRef, ButtonHTMLAttributes } from 'react'
import { Button } from 'components/ui'
import { moveToShopify } from 'lib/helper/cart'
import { Cart } from 'lib/Type'

type Props = {
  cart: Cart
  buttonRef: Ref<HTMLButtonElement>
}

type RefProps = {
  shape: 'square' | 'circle'
} & ButtonHTMLAttributes<HTMLButtonElement>

// eslint-disable-next-line react/display-name
const RefButton = forwardRef<HTMLButtonElement, RefProps>(
  ({ ...props }, ref) => {
    return <Button {...props} forwardRef={ref} />
  }
)

export const CartCheckout: FC<Props> = ({ cart, buttonRef }) => {
  return (
    <>
      <p className="flex flex-col justify-center py-5 text-center">
        合計: {cart.subtotalPrice}円
      </p>
      <div className="flex flex-col justify-center">
        <Link href="/" passHref>
          <RefButton
            aria-label="お会計に進む"
            type="button"
            ref={buttonRef}
            shape="square"
            onClick={() => moveToShopify(cart)}
          >
            購入する
          </RefButton>
        </Link>
      </div>
    </>
  )
}
