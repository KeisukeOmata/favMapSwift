import { Button } from 'components/ui'
import { Cart } from 'lib/Type'
import { moveToShopify } from 'lib/helper/cart'
import Link from 'next/link'
import { FC, Ref, forwardRef, ButtonHTMLAttributes } from 'react'

type Props = {
  cart: Cart
  buttonRef: Ref<HTMLButtonElement>
}

type RefProps = {
  text: string
  shape: 'square' | 'circle'
} & ButtonHTMLAttributes<HTMLButtonElement>

// eslint-disable-next-line react/display-name
const RefButton = forwardRef<HTMLButtonElement, RefProps>(({ ...props }, ref) => {
  return <Button {...props} forwardRef={ref}></Button>
})

export const CartCheckout: FC<Props> = ({ cart, buttonRef }) => {
  return (
    <>
      <p className="flex flex-col justify-center py-5 text-center">合計: {cart.subtotalPrice}円</p>
      <div className="flex flex-col justify-center">
        <Link href="/" passHref>
          <RefButton
            text="購入する"
            aria-label="お会計に進む"
            type="button"
            ref={buttonRef}
            shape="square"
            onClick={() => moveToShopify(cart)}
          ></RefButton>
        </Link>
      </div>
    </>
  )
}
