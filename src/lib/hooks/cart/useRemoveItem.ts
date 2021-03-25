import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { shopify } from 'lib/shopify'
import { Cart } from 'lib/Type'

type useRemoveItemType = {
  RemoveItem: (cartItemId: string) => void
}

export const useRemoveItem = (): useRemoveItemType => {
  const { setCartState, getCartState } = useRecoilCart()
  const cartState = getCartState()

  const RemoveItem = (cartItemId: string) => {
    if (cartState) {
      shopify.checkout
        .removeLineItems(cartState.id, [cartItemId])
        .then((cart) => setCartState(cart as Cart))
    }
  }

  return {
    RemoveItem,
  }
}
