import { Cart } from 'lib/Type'
import { presenceCheck, getCartItemId, getCurrentQuantity } from 'lib/helper/hooks'
import { useRecoilCart } from 'lib/hooks/state'
import { shopify } from 'lib/shopify'
import { useCallback } from 'react'

type useAddItemType = {
  AddItem: (itemIdState: string, addTime: string) => void
}

export const useAddItem = (): useAddItemType => {
  const { cartState, setCartState } = useRecoilCart()

  const AddItem = useCallback(
    async (itemIdState: string, addTime: string): Promise<void> => {
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
          await shopify.checkout.addLineItems(cartState.id, lineItemsToAdd).then((cart) => setCartState(cart as Cart))
        } else {
          const cartItemId = getCartItemId(cartState, itemIdState)
          const currentQuantity = getCurrentQuantity(cartState, itemIdState)
          await shopify.checkout
            .updateLineItems(cartState.id, [{ id: cartItemId, quantity: currentQuantity + 1 }])
            .then((cart) => setCartState(cart as Cart))
        }
      }
    },
    [cartState, setCartState]
  )

  return {
    AddItem,
  }
}
