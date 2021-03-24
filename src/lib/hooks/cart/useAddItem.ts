import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { shopify } from 'lib/shopify'
import { Cart } from 'lib/Type'

type useAddItemType = {
  useAddItem: (itemIdState: string | number) => void
}

export const useAddItem = (itemIdState: string | number): useAddItemType => {
  const { setCartState, getCartState } = useRecoilCart()
  const cartState = getCartState()

  if (cartState) {
    shopify.checkout
      .addLineItems(cartState.id, [{ variantId: itemIdState, quantity: 1 }])
      .then((cart) => setCartState(cart as Cart))
  }

  return {
    useAddItem,
  }
}
