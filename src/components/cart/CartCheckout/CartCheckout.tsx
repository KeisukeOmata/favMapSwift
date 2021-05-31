import Link from 'next/link'
import { FC, Ref, forwardRef, ButtonHTMLAttributes } from 'react'
import { Button } from 'components/ui'
import { Cart } from 'lib/Type'
import s from './CartCheckout.module.css'

type Props = {
  cart: Cart
  buttonRef: Ref<HTMLButtonElement>
  moveToShopify: (cart: Cart) => void
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

export const CartCheckout: FC<Props> = ({ cart, buttonRef, moveToShopify }) => {
  return (
    <>
      <p className={s.total}>合計: {cart.subtotalPrice}円</p>
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