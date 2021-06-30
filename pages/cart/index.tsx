/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CartItem, CartCheckout } from 'components/cart'
import { PageSEO, ContentWrapper } from 'components/layouts'
import { Head } from 'components/ui'
import { resetCheckoutId } from 'lib/helper/cart'
import { useRecoilCart } from 'lib/hooks/state'
import { Config } from 'lib/site.config'
import { useRef } from 'react'

export default function CartPage() {
  const { cartState } = useRecoilCart()
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <PageSEO title="Cart" path="/cart" ogImageUrl={Config.defaultOGImage} />
      <div className="pt-2">
        <ContentWrapper>
          {cartState && (
            <>
              {cartState.lineItems.length === 0 ? (
                <Head id={'head'} head={'BAGが空です'} />
              ) : (
                <>
                  <Head id={'head'} head={'BAG'} />
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