import { useEffect } from 'react'
import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { shopify } from 'lib/shopify'
import { getCheckoutId, setCheckoutId } from 'lib/helpers'
import { Cart } from 'lib/Type'

type useInitializeCartType = {
  useInitializeCart: () => void
}

export const useInitializeCart = (): useInitializeCartType => {
  const { setCartState } = useRecoilCart()

  useEffect(() => {
    const checkoutId = getCheckoutId()
    if (checkoutId) return
    shopify.checkout.create().then((cart) => {
      setCartState(cart as Cart)
      setCheckoutId(cart.id)
    })
  }, [])

  return {
    useInitializeCart,
  }
}
