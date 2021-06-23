import { Cart } from 'lib/Type'
import { getCheckoutId, setCheckoutId } from 'lib/helper/hooks'
import { useRecoilCart } from 'lib/hooks/state'
import { shopify } from 'lib/shopify'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useEffect } from 'react'

export const Context: FC = ({ children }) => {
  const { setCartState } = useRecoilCart()
  const router = useRouter()

  useEffect(() => {
    if (router.pathname !== '/') {
      const checkoutId = getCheckoutId()
      checkoutId
        ? shopify.checkout.fetch(checkoutId).then((cart) => setCartState(cart as Cart))
        : shopify.checkout.create().then((cart) => {
            setCartState(cart as Cart)
            setCheckoutId(cart.id as string)
          })
    }
  }, [router.pathname, setCartState])

  return <div className="flex flex-col min-h-screen">{children}</div>
}
