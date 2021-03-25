import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { shopify } from 'lib/shopify'
import { Cart } from 'lib/Type'

type useAddItemType = {
  AddItem: (itemIdState: string | number) => void
}

export const useAddItem = (): useAddItemType => {
  const { setCartState, getCartState } = useRecoilCart()
  const cartState = getCartState()

  const AddItem = (itemIdState: string | number): void => {
    if (cartState) {
      shopify.checkout
        .addLineItems(cartState.id, [{ variantId: itemIdState, quantity: 1 }])
        .then((cart) => setCartState(cart as Cart))
    }
  }

  return {
    AddItem,
  }
}
