import { useEffect } from 'react'
import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { shopify } from 'lib/shopify'
import { getCheckoutId, setCheckoutId } from 'lib/helpers'
import { Cart } from 'lib/Type'

type useCartType = {
  // cart: Cart | null
  InitializeCart: () => void
  FetchCart: () => void
  changeQuantity: (skuId: string, quantity: string) => void
  removeItem: (cartItemId: string) => void
  addItem: (skuId: string | number) => void
}

export const useCart = (): useCartType => {
  const { setCartState, getCartState } = useRecoilCart()
  const cartState = getCartState()

  const InitializeCart = () => {
    useEffect(() => {
      const checkoutId = getCheckoutId()
      if (checkoutId) return
      shopify.checkout.create().then((cart) => {
        setCartState(cart as Cart)
        setCheckoutId(cart.id)
      })
    }, [])
  }

  InitializeCart()

  const FetchCart = () => {
    useEffect(() => {
      const checkoutId = getCheckoutId()
      if (!checkoutId) return
      shopify.checkout
        .fetch(checkoutId)
        .then((cart) => setCartState(cart as Cart))
    }, [])
  }

  const changeQuantity = (cartItemId: string, quantity: string) => {
    if (!cartState) return
    shopify.checkout
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .updateLineItems(cartState.id, [
        { id: cartItemId, quantity: parseInt(quantity) },
      ])
      .then((cart: Cart) => setCartState(cart))
  }

  const removeItem = (cartItemId: string): void => {
    if (!cartState) return
    shopify.checkout
      .removeLineItems(cartState.id, [cartItemId])
      .then((cart) => setCartState(cart as Cart))
  }

  const addItem = (itemIdState: string | number) => {
    if (!cartState) return
    shopify.checkout
      .addLineItems(cartState.id, [{ variantId: itemIdState, quantity: 1 }])
      .then((cart) => setCartState(cart as Cart))
  }

  return {
    // cart,
    InitializeCart,
    FetchCart,
    changeQuantity,
    removeItem,
    addItem,
  }
}
