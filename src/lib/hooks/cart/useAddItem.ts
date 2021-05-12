import { useCallback } from 'react'
import { useRecoilCart } from 'lib/hooks/state'
import { shopify } from 'lib/shopify'
import { Cart } from 'lib/Type'

type useAddItemType = {
  AddItem: (itemIdState: string | number, addTime: string) => void
}

export const useAddItem = (): useAddItemType => {
  const { setCartState, getCartState } = useRecoilCart()
  const cartState = getCartState()

  const presenceCheck = useCallback(
    (cartState: Cart, itemIdState: string | number): string => {
      return (
        cartState.lineItems.find(
          (lineItem) => lineItem.variant.id === itemIdState
        )?.variant.id ?? ''
      )
    },
    []
  )

  const getCartItemId = useCallback(
    (cartState: Cart, itemIdState: string | number): string => {
      return (
        cartState.lineItems.find(
          (lineItem) => lineItem.variant.id === itemIdState
        )?.id ?? ''
      )
    },
    []
  )

  const getCurrentQuantity = useCallback(
    (cartState: Cart, itemIdState: string | number): number => {
      return (
        cartState.lineItems.find(
          (lineItem) => lineItem.variant.id === itemIdState
        )?.quantity ?? 0
      )
    },
    []
  )

  const AddItem = useCallback(
    async (itemIdState: string | number, addTime: string): Promise<void> => {
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
          await shopify.checkout
            .addLineItems(cartState.id, lineItemsToAdd)
            .then((cart) => setCartState(cart as Cart))
        } else {
          const cartItemId = getCartItemId(cartState, itemIdState)
          const currentQuantity = getCurrentQuantity(cartState, itemIdState)
          await shopify.checkout
            .updateLineItems(cartState.id, [
              { id: cartItemId, quantity: currentQuantity + 1 },
            ])
            .then((cart) => setCartState(cart as Cart))
        }
      }
    },
    [cartState, getCartItemId, getCurrentQuantity, presenceCheck, setCartState]
  )

  return {
    AddItem,
  }
}
