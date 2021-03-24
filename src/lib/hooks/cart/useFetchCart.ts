import { useEffect } from 'react'
import { useRecoilCart } from 'lib/hooks/state/useRecoilCart'
import { shopify } from 'lib/shopify'
import { getCheckoutId } from 'lib/helpers'
import { Cart } from 'lib/Type'

type useFetchCartType = {
  useFetchCart: () => void
}

export const useFetchCart = (): useFetchCartType => {
  const { setCartState } = useRecoilCart()

  useEffect(() => {
    const checkoutId = getCheckoutId()
    if (!checkoutId) return
    shopify.checkout
      .fetch(checkoutId)
      .then((cart) => setCartState(cart as Cart))
  }, [])

  return {
    useFetchCart,
  }
}
