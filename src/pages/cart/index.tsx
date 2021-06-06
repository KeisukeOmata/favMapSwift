/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useRef } from 'react'
import { CartItem } from 'components/cart'
import { PageSEO, ContentWrapper } from 'components/layouts'
import { CartCheckout } from 'components/cart/CartCheckout'
import { resetCheckoutId } from 'lib/helper/cart'
import { useRecoilCart } from 'lib/hooks/state'
import { useInitializeCart, useFetchCart } from 'lib/hooks/cart'
import { Config } from 'lib/site.config'

export default function CartPage() {
  const { cartState } = useRecoilCart()
  const buttonRef = useRef<HTMLButtonElement>(null)
  useFetchCart()
  useInitializeCart()

  return (
    <>
      <PageSEO title="Cart" path="/cart" ogImageUrl={Config.defaultOGImage} />
      <div className="pt-2">
        <ContentWrapper>
          {cartState && (
            <>
              {cartState.lineItems.length === 0 ? (
                <div className="flex py-1.5 under-line">
                  <h2 id="head" tabIndex={-1}>
                    BAGが空です
                  </h2>
                </div>
              ) : (
                <>
                  <div className="flex py-1.5 under-line">
                    <h2 id="head" tabIndex={-1}>
                      BAG
                    </h2>
                  </div>
                  {cartState.lineItems.map((item, i) =>
                    item.variant ? (
                      <CartItem key={`cart-item-${i}`} item={item} />
                    ) : (
                      // Reset cart because product information is outdated
                      resetCheckoutId()
                    )
                  )}
                  <CartCheckout cart={cartState} buttonRef={buttonRef} />
                </>
              )}
            </>
          )}
        </ContentWrapper>
      </div>
    </>
  )
}
