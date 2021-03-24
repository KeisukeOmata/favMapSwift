import { FC } from 'react'
import { Button } from 'components/ui'
import { useChangeQuantity, useRemoveItem } from 'lib/hooks/cart'
import { getColorAndSize } from 'lib/helpers'
import { LineItem } from 'lib/Type'
// import s from './CartItemDetail.module.scss'

type Props = {
  cartItem: LineItem
}

export const CartItemDetail: FC<Props> = ({ cartItem }) => {
  const ChangeQuantity = (cartItemId: string, quantity: string) => {
    useChangeQuantity(cartItemId, quantity)
  }
  const RemoveItem = (cartItemId: string) => {
    useRemoveItem(cartItemId)
  }

  return (
    <>
      <p>{cartItem.title}</p>
      <div>
        {/* Color:{' '} */}
        {getColorAndSize(cartItem.variant.selectedOptions, 'Color')}
      </div>
      <div>
        {/* Size:{' '} */}
        {getColorAndSize(cartItem.variant.selectedOptions, 'Size')}
      </div>
      <p>¥{cartItem.variant.price}</p>
      <div>
        個数：
        {/* eslint-disable-next-line jsx-a11y/no-onchange */}
        <select
          className="text-black"
          defaultValue={cartItem.quantity}
          onChange={(e) => ChangeQuantity(cartItem.id, e.target.value)}
        >
          {[...Array(10).keys()].map((number) => {
            const value = number + 1
            return (
              <option key={value} value={value}>
                {value}
              </option>
            )
          })}
        </select>
      </div>
      <p>小計： ¥{parseInt(cartItem.variant.price) * cartItem.quantity}</p>
      <br></br>
      <div>
        <Button
          shape="square"
          type="button"
          aria-label="カートから商品を削除する"
          onClick={() => RemoveItem(cartItem.id)}
        >
          削除
        </Button>
      </div>
    </>
  )
}
