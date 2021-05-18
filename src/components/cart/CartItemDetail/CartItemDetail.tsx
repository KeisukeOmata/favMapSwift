import { FC, memo, useCallback } from 'react'
import { Button } from 'components/ui'
import { Minus, Plus } from 'components/icons'
import { useChangeQuantity, useRemoveItem } from 'lib/hooks/cart'
import { useLoading } from 'lib/hooks/state'
import { LineItem, SelectedOption } from 'lib/Type'
import s from './CartItemDetail.module.css'

type Props = {
  cartItem: LineItem
}

export const CartItemDetail: FC<Props> = memo(({ cartItem }) => {
  const { ChangeQuantity } = useChangeQuantity()
  const { RemoveItem } = useRemoveItem()
  const { loadingState, setLoadingState } = useLoading()

  const getColorAndSize = useCallback(
    (options: SelectedOption[], name: string): string => {
      return options.find((option) => option.name === name)?.value ?? ''
    },
    []
  )

  const handleRemoveItem = useCallback(
    async (cartItemId: string): Promise<void> => {
      setLoadingState(true)
      try {
        await RemoveItem(cartItemId)
        setLoadingState(false)
      } catch (err) {
        setLoadingState(false)
      }
    },
    [RemoveItem, setLoadingState]
  )

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
          onClick={() => ChangeQuantity(cartItem.id, cartItem.quantity - 1)}
        >
          <Minus />
        </button>
        <div className={s.quantity}>{cartItem.quantity}</div>
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
          loading={loadingState}
          onClick={() => handleRemoveItem(cartItem.id)}
        >
          削除
        </Button>
      </div>
    </>
  )
})

CartItemDetail.displayName = 'CartItemDetail'
