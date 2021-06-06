import { useEffect } from 'react'
import { getCheckoutId } from 'lib/helper/hooks'
import { useRecoilCart } from 'lib/hooks/state'
import { shopify } from 'lib/shopify'
import { Cart } from 'lib/Type'

export const useFetchCart = (): void => {
  const { setCartState } = useRecoilCart()

  useEffect(() => {
    const checkoutId = getCheckoutId()
    if (!checkoutId) return
    shopify.checkout
      .fetch(checkoutId)
      .then((cart) => setCartState(cart as Cart))
  }, [setCartState])
}
