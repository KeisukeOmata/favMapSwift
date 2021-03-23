import { useEffect } from 'react'
import { atom, useRecoilState, selector, useRecoilValue } from 'recoil'
import { shopify } from 'lib/shopify'
import { getCheckoutId, setCheckoutId } from 'lib/helpers'
import { Cart } from 'lib/Type'

type useCartType = {
  cart: Cart | null
  quantity: number
  changeQuantity: (skuId: string, quantity: string) => void
  removeItem: (cartItemId: string) => void
  addItem: (skuId: string | number) => void
  FetchCart: () => void
}

const cartAtom = atom<Cart | null>({
  key: 'cartAtomKey',
  default: null,
})
const quantityState = selector({
  key: 'quantityStateKey',
  get: ({ get }) =>
    get(cartAtom)?.lineItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    ) ?? 0,
})

export const useCart = (): useCartType => {
  const [cart, setCart] = useRecoilState(cartAtom)
  const quantity = useRecoilValue(quantityState)

  const InitializeCart = () => {
    useEffect(() => {
      const checkoutId = getCheckoutId()
      if (checkoutId) return
      shopify.checkout.create().then((cart) => {
        setCart(cart as Cart)
        setCheckoutId(cart.id)
      })
    }, [])
  }

  InitializeCart()

  const changeQuantity = (cartItemId: string, quantity: string) => {
    if (!cart) return
    shopify.checkout
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .updateLineItems(cart.id, [
        { id: cartItemId, quantity: parseInt(quantity) },
      ])
      .then((cart: Cart) => setCart(cart))
  }

  const removeItem = (cartItemId: string): void => {
    if (!cart) return
    shopify.checkout
      .removeLineItems(cart.id, [cartItemId])
      .then((cart) => setCart(cart as Cart))
  }

  const addItem = (itemIdState: string | number) => {
    if (!cart) return
    shopify.checkout
      .addLineItems(cart.id, [{ variantId: itemIdState, quantity: 1 }])
      .then((cart) => setCart(cart as Cart))
  }

  const FetchCart = () => {
    useEffect(() => {
      const checkoutId = getCheckoutId()
      if (!checkoutId) return
      shopify.checkout.fetch(checkoutId).then((cart) => setCart(cart as Cart))
    }, [])
  }

  return {
    cart,
    quantity,
    changeQuantity,
    removeItem,
    addItem,
    FetchCart,
  }
}
