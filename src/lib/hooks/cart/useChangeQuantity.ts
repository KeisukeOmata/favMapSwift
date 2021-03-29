import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { shopify } from 'lib/shopify'
import { Cart } from 'lib/Type'

type useChangeQuantityType = {
  ChangeQuantity: (cartItemId: string, quantity: number) => void
}

export const useChangeQuantity = (): useChangeQuantityType => {
  const { setCartState, getCartState } = useRecoilCart()
  const cartState = getCartState()

  const ChangeQuantity = (cartItemId: string, quantity: number): void => {
    if (cartState) {
      shopify.checkout
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .updateLineItems(cartState.id, [{ id: cartItemId, quantity: quantity }])
        .then((cart: Cart) => setCartState(cart))
    }
  }

  return {
    ChangeQuantity,
  }
}
