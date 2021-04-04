import { FC } from 'react'
import { Button } from 'components/ui'
import { Minus, Plus } from 'components/icons'
import { useChangeQuantity, useRemoveItem } from 'lib/hooks/cart'
import { getColorAndSize } from 'lib/helpers'
import { LineItem } from 'lib/Type'
import { resetCheckoutId } from 'lib/helpers'

type Props = {
  cartItem: LineItem
}

export const CartItemDetail: FC<Props> = ({ cartItem }) => {
  const { ChangeQuantity } = useChangeQuantity()
  const { RemoveItem } = useRemoveItem()

  return (
    <>
      {cartItem.variant ? (
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
          <p>{cartItem.variant.price}円</p>
          <div className="flex">
            <p>個数：</p>
            <button
              aria-label="個数を1つ減らす"
              onClick={() => ChangeQuantity(cartItem.id, cartItem.quantity - 1)}
            >
              <Minus />
            </button>
            <div className="mx-3">{cartItem.quantity}</div>
            <button
              aria-label="個数を1つ増やす"
              onClick={() => ChangeQuantity(cartItem.id, cartItem.quantity + 1)}
            >
              <Plus />
            </button>
          </div>
          <p>小計： {parseInt(cartItem.variant.price) * cartItem.quantity}円</p>
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
      ) : (
        resetCheckoutId()
      )}
    </>
  )
}
