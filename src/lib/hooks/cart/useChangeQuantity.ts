import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { shopify } from 'lib/shopify'
import { Cart } from 'lib/Type'

type useChangeQuantityType = {
  useChangeQuantity: (cartItemId: string, quantity: string) => void
}

export const useChangeQuantity = (
  cartItemId: string,
  quantity: string
): useChangeQuantityType => {
  const { setCartState, getCartState } = useRecoilCart()
  const cartState = getCartState()

  if (cartState) {
    shopify.checkout
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .updateLineItems(cartState.id, [
        { id: cartItemId, quantity: parseInt(quantity) },
      ])
      .then((cart: Cart) => setCartState(cart))
  }

  return {
    useChangeQuantity,
  }
}
