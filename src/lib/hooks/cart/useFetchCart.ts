import { useEffect, useCallback } from 'react'
import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { shopify } from 'lib/shopify'
import { Cart } from 'lib/Type'

export const useFetchCart = (): void => {
  const { setCartState } = useRecoilCart()

  const getCheckoutId = useCallback((): string => {
    return localStorage.getItem('checkoutId') ?? ''
  }, [])

  useEffect(() => {
    const checkoutId = getCheckoutId()
    if (!checkoutId) return
    shopify.checkout
      .fetch(checkoutId)
      .then((cart) => setCartState(cart as Cart))
  }, [getCheckoutId, setCartState])
}
