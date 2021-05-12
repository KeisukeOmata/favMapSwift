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
  const { loading, setLoading } = useLoading()

  const getColorAndSize = useCallback(
    (options: SelectedOption[], name: string): string => {
      return options.find((option) => option.name === name)?.value ?? ''
    },
    []
  )

  const handleRemoveItem = useCallback(
    async (cartItemId: string): Promise<void> => {
      setLoading(true)
      try {
        await RemoveItem(cartItemId)
        setLoading(false)
      } catch (err) {
        setLoading(false)
      }
    },
    [RemoveItem, setLoading]
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
          loading={loading}
          onClick={() => handleRemoveItem(cartItem.id)}
        >
          削除
        </Button>
      </div>
    </>
  )
})

CartItemDetail.displayName = 'CartItemDetail'
