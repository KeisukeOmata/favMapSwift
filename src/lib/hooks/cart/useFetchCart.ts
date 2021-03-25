import { useEffect } from 'react'
import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { shopify } from 'lib/shopify'
import { getCheckoutId } from 'lib/helpers'
import { Cart } from 'lib/Type'

export const useFetchCart = (): void => {
  const { setCartState } = useRecoilCart()

  useEffect(() => {
    const checkoutId = getCheckoutId()
    if (!checkoutId) return
    shopify.checkout
      .fetch(checkoutId)
      .then((cart) => setCartState(cart as Cart))
  }, [])
}
