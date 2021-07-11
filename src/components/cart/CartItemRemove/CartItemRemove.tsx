import { Button } from 'components/ui'
import { useHandleRemoveItem } from 'lib/hooks/cart'
import { useLoading } from 'lib/hooks/state'
import { FC } from 'react'

type CartItemRemoveType = {
  cartItemId: string
}

export const CartItemRemove: FC<CartItemRemoveType> = ({ cartItemId }) => {
  const { handleRemoveItem } = useHandleRemoveItem()
  const { loadingState, setLoadingState } = useLoading()

  return (
    <>
      <div>
        <Button
          text="削除"
          aria-label="カートから商品を削除する"
          loading={loadingState}
          shape="square"
          type="button"
          onClick={() => handleRemoveItem(cartItemId, setLoadingState)}
        ></Button>
      </div>
    </>
  )
}
