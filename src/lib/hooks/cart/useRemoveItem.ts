import { useCallback } from 'react'
import { useRecoilCart } from 'lib/hooks/state'
import { shopify } from 'lib/shopify'
import { Cart } from 'lib/Type'

type useRemoveItemType = {
  RemoveItem: (cartItemId: string) => void
}

export const useRemoveItem = (): useRemoveItemType => {
  const { setCartState, getCartState } = useRecoilCart()
  const cartState = getCartState()

  const RemoveItem = useCallback(
    async (cartItemId: string): Promise<void> => {
      if (cartState) {
        await shopify.checkout
          .removeLineItems(cartState.id, [cartItemId])
          .then((cart) => setCartState(cart as Cart))
      }
    },
    [cartState, setCartState]
  )

  return {
    RemoveItem,
  }
}
