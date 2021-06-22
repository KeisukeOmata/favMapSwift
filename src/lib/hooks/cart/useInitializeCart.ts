import { Cart } from 'lib/Type'
import { getCheckoutId, setCheckoutId } from 'lib/helper/hooks'
import { useRecoilCart } from 'lib/hooks/state'
import { shopify } from 'lib/shopify'
import { useEffect } from 'react'

export const useInitializeCart = (): void => {
  const { setCartState } = useRecoilCart()

  useEffect(() => {
    const checkoutId = getCheckoutId()
    if (checkoutId) return
    shopify.checkout.create().then((cart) => {
      setCartState(cart as Cart)
      setCheckoutId(cart.id as string)
    })
  }, [setCartState])
}
