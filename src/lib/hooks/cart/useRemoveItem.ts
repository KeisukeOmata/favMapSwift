import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { shopify } from 'lib/shopify'
import { Cart } from 'lib/Type'

type useRemoveItemType = {
  useRemoveItem: (cartItemId: string) => void
}

export const useRemoveItem = (cartItemId: string): useRemoveItemType => {
  const { setCartState, getCartState } = useRecoilCart()
  const cartState = getCartState()

  if (cartState) {
    shopify.checkout
      .removeLineItems(cartState.id, [cartItemId])
      .then((cart) => setCartState(cart as Cart))
  }

  return {
    useRemoveItem,
  }
}
