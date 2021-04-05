import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { shopify } from 'lib/shopify'
import { Cart } from 'lib/Type'
import {
  presenceCheck,
  getPresenceCartItemId,
  getPresenceQuantity,
} from 'lib/helpers'

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
        const presenceCartItemId = getPresenceCartItemId(cartState, itemIdState)
        const presenceQuantity = getPresenceQuantity(cartState, itemIdState)
        shopify.checkout
          .updateLineItems(cartState.id, [
            { id: presenceCartItemId, quantity: presenceQuantity + 1 },
          ])
          .then((cart) => setCartState(cart as Cart))
      }
    }
  }

  return {
    AddItem,
  }
}
