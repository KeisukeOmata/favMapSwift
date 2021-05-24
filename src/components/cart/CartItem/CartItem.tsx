import { FC } from 'react'
import { CartItemImage, CartItemDetail } from 'components/cart'
import { LineItem, SelectedOption } from 'lib/Type'
import s from './CartItem.module.css'

type Props = {
  item: LineItem
  loadingState: boolean
  getColorAndSize(options: SelectedOption[], name: string): string
  handleChangeQuantity(
    cartItemId: string,
    cartItemQuantity: number
  ): Promise<void>
  handleRemoveItem(cartItemId: string): Promise<void>
}

export const CartItem: FC<Props> = ({
  item,
  loadingState,
  getColorAndSize,
  handleChangeQuantity,
  handleRemoveItem,
}) => (
  <>
    <div className="flex justify-between flex-wrap">
      <div className={s.item}>
        <CartItemImage cartItem={item} />
      </div>
      <div className={s.item}>
        <CartItemDetail
          cartItem={item}
          loadingState={loadingState}
          getColorAndSize={getColorAndSize}
          handleChangeQuantity={handleChangeQuantity}
          handleRemoveItem={handleRemoveItem}
        />
      </div>
    </div>
  </>
)
