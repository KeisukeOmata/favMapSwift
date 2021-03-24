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

  const getCartState = (): Cart | null => {
    return cartState
  }

  const setCartState = (cart: Cart | null): void => {
    setCartStateToRecoil(cart)
  }

  return {
    getCartState,
    setCartState,
  }
}
