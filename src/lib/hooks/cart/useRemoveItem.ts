import { Cart } from 'lib/Type'
import { useRecoilCart } from 'lib/hooks/state'
import { shopify } from 'lib/shopify'
import { useCallback } from 'react'

type useRemoveItemType = {
  RemoveItem: (cartItemId: string) => void
}

export const useRemoveItem = (): useRemoveItemType => {
  const { cartState, setCartState } = useRecoilCart()

  const RemoveItem = useCallback(
    async (cartItemId: string): Promise<void> => {
      if (cartState) {
        await shopify.checkout.removeLineItems(cartState.id, [cartItemId]).then((cart) => setCartState(cart as Cart))
      }
    },
    [cartState, setCartState]
  )

  return {
    RemoveItem,
  }
}
