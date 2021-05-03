import { useEffect, useCallback } from 'react'
import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { shopify } from 'lib/shopify'
import { Cart } from 'lib/Type'

export const useInitializeCart = (): void => {
  const { setCartState } = useRecoilCart()

  const setCheckoutId = useCallback((checkoutId: string | number): void => {
    localStorage.setItem('checkoutId', String(checkoutId))
  }, [])

  const getCheckoutId = useCallback((): string => {
    return localStorage.getItem('checkoutId') ?? ''
  }, [])

  useEffect(() => {
    const checkoutId = getCheckoutId()
    if (checkoutId) return
    shopify.checkout.create().then((cart) => {
      setCartState(cart as Cart)
      setCheckoutId(cart.id)
    })
  }, [getCheckoutId, setCartState, setCheckoutId])
}
