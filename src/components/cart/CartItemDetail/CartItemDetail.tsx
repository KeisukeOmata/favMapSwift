import { FC } from 'react'
import { Button } from 'components/ui'
import { useCart } from 'lib/hooks/useCart'
import { getColorAndSize } from 'lib/helpers'
import { Sku } from 'lib/Type'
// import s from './CartItemDetail.module.scss'

type Props = {
  cartItem: {
    title: string
    variant: Sku
    quantity: number
    id: string
  }
}

export const CartItemDetail: FC<Props> = ({ cartItem }) => {
  const { changeQuantity, removeItem } = useCart()

  return (
    <>
      <div>
        <p>{cartItem.title}</p>
        <div>
          {/* Color:{' '} */}
          {getColorAndSize(cartItem.variant.selectedOptions, 'Color')}
        </div>
        <div>
          {/* Size:{' '} */}
          {getColorAndSize(cartItem.variant.selectedOptions, 'Size')}
        </div>
      </div>
      <div>
        <p>¥{cartItem.variant.price}</p>
      </div>
      <div>
        個数：
        {/* eslint-disable-next-line jsx-a11y/no-onchange */}
        <select
          className="text-black"
          defaultValue={cartItem.quantity}
          onChange={(e) => changeQuantity(cartItem.id, e.target.value)}
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
      <div>
        <p>小計： ¥{parseInt(cartItem.variant.price) * cartItem.quantity}</p>
      </div>
      <br></br>
      <div>
        <Button
          shape="square"
          type="button"
          aria-label="カートから商品を削除する"
          onClick={() => removeItem(cartItem.id)}
        >
          削除
        </Button>
      </div>
    </>
  )
}
