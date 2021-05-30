import { useCallback } from 'react'
import { useRecoilCart } from 'lib/hooks/state'
import { shopify } from 'lib/shopify'
import { Cart } from 'lib/Type'

type useChangeQuantityType = {
  ChangeQuantity: (cartItemId: string, quantity: number) => void
}

export const useChangeQuantity = (): useChangeQuantityType => {
  const { cartState, setCartState } = useRecoilCart()

  const ChangeQuantity = useCallback(
    async (cartItemId: string, quantity: number): Promise<void> => {
      if (cartState) {
        await shopify.checkout
          .updateLineItems(cartState.id, [
            { id: cartItemId, quantity: quantity },
          ])
          .then((cart) => setCartState(cart as Cart))
      }
    },
    [cartState, setCartState]
  )

  return {
    ChangeQuantity,
  }
}
