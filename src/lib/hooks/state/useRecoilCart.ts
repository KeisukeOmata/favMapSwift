import { Cart } from 'lib/Type'
import { useCallback } from 'react'
import { atom, useRecoilState } from 'recoil'

type useRecoilCartType = {
  cartState: Cart | null
  setCartState: (cart: Cart | null) => void
}

export const cartAtom = atom<Cart | null>({
  key: 'cartAtomKey',
  default: null,
})

export const useRecoilCart = (): useRecoilCartType => {
  const [cartState, setCartStateToRecoil] = useRecoilState(cartAtom)

  const setCartState = useCallback(
    (cart: Cart | null): void => {
      // Sort by time added to cart
      cart?.lineItems.sort((a, b) => {
        const aDate = new Date(a.customAttributes[0].value)
        const bDate = new Date(b.customAttributes[0].value)
        if (aDate < bDate) {
          return 1
        }
        if (aDate > bDate) {
          return -1
        }
        return 0
      })
      setCartStateToRecoil(cart)
    },
    [setCartStateToRecoil]
  )

  return {
    cartState,
    setCartState,
  }
}
