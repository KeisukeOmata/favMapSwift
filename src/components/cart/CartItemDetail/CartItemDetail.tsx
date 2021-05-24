import { FC } from 'react'
import { Button } from 'components/ui'
import { Minus, Plus } from 'components/icons'
import { LineItem, SelectedOption } from 'lib/Type'
import s from './CartItemDetail.module.css'

type Props = {
  cartItem: LineItem
  loadingState: boolean
  getColorAndSize(options: SelectedOption[], name: string): string
  handleChangeQuantity(
    cartItemId: string,
    cartItemQuantity: number
  ): Promise<void>
  handleRemoveItem(cartItemId: string): Promise<void>
}

export const CartItemDetail: FC<Props> = ({
  cartItem,
  loadingState,
  getColorAndSize,
  handleChangeQuantity,
  handleRemoveItem,
}) => (
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
        onClick={() => handleChangeQuantity(cartItem.id, cartItem.quantity - 1)}
      >
        <Minus />
      </button>
      <div className={s.quantity}>{cartItem.quantity}</div>
      <button
        aria-label="個数を1つ増やす"
        disabled={loadingState}
        onClick={() => handleChangeQuantity(cartItem.id, cartItem.quantity + 1)}
      >
        <Plus />
      </button>
    </div>
    <p>小計： {parseInt(cartItem.variant.price) * cartItem.quantity}円</p>
    <br></br>
    <div>
      <Button
        aria-label="カートから商品を削除する"
        loading={loadingState}
        shape="square"
        type="button"
        onClick={() => handleRemoveItem(cartItem.id)}
      >
        削除
      </Button>
    </div>
  </>
)
