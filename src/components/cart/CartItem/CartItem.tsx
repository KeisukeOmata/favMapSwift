import { FC } from 'react'
import { CartItemImage, CartItemDetail } from 'components/cart'
import { LineItem } from 'lib/Type'

type Props = {
  item: LineItem
}

export const CartItem: FC<Props> = ({ item }) => (
  <>
    <div className="flex flex-wrap justify-between">
      <div className="flex flex-col justify-center pt-5 w-1/2 sm:w-full">
        <CartItemImage cartItem={item} />
      </div>
      <div className="flex flex-col justify-center pt-5 w-1/2 sm:w-full">
        <CartItemDetail cartItem={item} />
      </div>
    </div>
  </>
)
