import { useCallback } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { Cart } from 'lib/Type'

type useRecoilCartType = {
  getCartState: () => Cart | null
  setCartState: (cart: Cart | null) => void
}

export const cartAtom = atom<Cart | null>({
  key: 'cartAtomKey',
  default: null,
})

export const useRecoilCart = (): useRecoilCartType => {
  const cartState = useRecoilValue(cartAtom)
  const setCartStateToRecoil = useSetRecoilState(cartAtom)

  const getCartState = useCallback((): Cart | null => {
    return cartState
  }, [cartState])

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
    getCartState,
    setCartState,
  }
}
