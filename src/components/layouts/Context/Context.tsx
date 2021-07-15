import { Cart } from 'lib/Type'
import { gooleAnalyticsId } from 'lib/gtag'
import { getCheckoutId, setCheckoutId } from 'lib/helper/hooks'
import { useRecoilCart } from 'lib/hooks/state'
import { shopify } from 'lib/shopify'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { FC } from 'react'
import { useEffect } from 'react'

export const Context: FC = ({ children }) => {
  const { setCartState } = useRecoilCart()
  const router = useRouter()

  {
    gooleAnalyticsId && (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gooleAnalyticsId}`} />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gooleAnalyticsId}', {
            page_path: window.location.pathname,
          });`,
          }}
        />
      </>
    )
  }

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
