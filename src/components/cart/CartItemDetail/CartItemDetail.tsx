import { Minus, Plus } from 'components/icons'
import { LineItem } from 'lib/Type'
import { getColorAndSize } from 'lib/helper/cart'
import { useHandleChangeQuantity } from 'lib/hooks/cart'
import { useLoading } from 'lib/hooks/state'
import { FC } from 'react'

type Props = {
  cartItem: LineItem
}

export const CartItemDetail: FC<Props> = ({ cartItem }) => {
  const { handleChangeQuantity } = useHandleChangeQuantity()
  const { loadingState, setLoadingState } = useLoading()

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
      <p>{cartItem.variant.price}円</p>
      <div className="flex">
        <p>個数：</p>
        <button
          aria-label="個数を1つ減らす"
          disabled={loadingState}
          onClick={() => handleChangeQuantity(cartItem.id, cartItem.quantity - 1, setLoadingState)}
        >
          <Minus />
        </button>
        <div className="px-3">{cartItem.quantity}</div>
        <button
          aria-label="個数を1つ増やす"
          disabled={loadingState}
          onClick={() => handleChangeQuantity(cartItem.id, cartItem.quantity + 1, setLoadingState)}
        >
          <Plus />
        </button>
      </div>
      <p>小計： {parseInt(cartItem.variant.price) * cartItem.quantity}円</p>
      <br></br>
    </>
  )
}
