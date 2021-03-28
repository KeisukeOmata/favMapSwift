import { FC } from 'react'
import { CartItemImage, CartItemDetail } from 'components/cart'
import { LineItem } from 'lib/Type'

type Props = {
  item: LineItem
}

export const CartItem: FC<Props> = ({ item }) => {
  return (
    <>
      <div className="flex justify-between flex-wrap">
        <div className="w-1/2 mt-5 flex flex-col justify-center sm:w-full">
          <CartItemImage cartItem={item} />
        </div>
        <div className="w-1/2 mt-5 flex flex-col justify-center sm:w-full">
          <CartItemDetail cartItem={item} />
        </div>
      </div>
    </>
  )
}
