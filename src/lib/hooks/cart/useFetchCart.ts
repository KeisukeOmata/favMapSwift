import { Cart } from 'lib/Type'
import { getCheckoutId, setCheckoutId } from 'lib/helper/hooks'
import { useRecoilCart } from 'lib/hooks/state'
import { shopify } from 'lib/shopify'
import { useEffect } from 'react'

export const useFetchCart = (): void => {
  const { setCartState } = useRecoilCart()

  useEffect(() => {
    const checkoutId = getCheckoutId()
    checkoutId
      ? shopify.checkout.fetch(checkoutId).then((cart) => setCartState(cart as Cart))
      : shopify.checkout.create().then((cart) => {
          setCartState(cart as Cart)
          setCheckoutId(cart.id as string)
        })
  }, [setCartState])
}
