import { Cart } from 'lib/Type'
import { getCheckoutId } from 'lib/helper/hooks'
import { useRecoilCart } from 'lib/hooks/state'
import { shopify } from 'lib/shopify'
import { useEffect } from 'react'

export const useFetchCart = (): void => {
  const { setCartState } = useRecoilCart()

  useEffect(() => {
    const checkoutId = getCheckoutId()
    if (!checkoutId) return
    shopify.checkout.fetch(checkoutId).then((cart) => setCartState(cart as Cart))
  }, [setCartState])
}
