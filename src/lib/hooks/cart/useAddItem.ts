import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { shopify } from 'lib/shopify'
import { Cart } from 'lib/Type'
import { presenceCheck, getCartItemId, getCurrentQuantity } from 'lib/helpers'

type useAddItemType = {
  AddItem: (itemIdState: string | number, addTime: string) => void
}

export const useAddItem = (): useAddItemType => {
  const { setCartState, getCartState } = useRecoilCart()
  const cartState = getCartState()

  const AddItem = (itemIdState: string | number, addTime: string): void => {
    const lineItemsToAdd = [
      {
        variantId: itemIdState,
        quantity: 1,
        customAttributes: [{ key: 'addTime', value: addTime }],
      },
    ]

    if (cartState) {
      const presenceId = presenceCheck(cartState, itemIdState)
      if (presenceId === '') {
        shopify.checkout
          .addLineItems(cartState.id, lineItemsToAdd)
          .then((cart) => setCartState(cart as Cart))
      } else {
        const cartItemId = getCartItemId(cartState, itemIdState)
        const currentQuantity = getCurrentQuantity(cartState, itemIdState)
        shopify.checkout
          .updateLineItems(cartState.id, [
            { id: cartItemId, quantity: currentQuantity + 1 },
          ])
          .then((cart) => setCartState(cart as Cart))
      }
    }
  }

  return {
    AddItem,
  }
}
