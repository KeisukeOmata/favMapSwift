/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CartItems } from 'components/cart'
import { PageSEO, ContentWrapper } from 'components/layouts'
import { useInitializeCart } from 'lib/hooks/cart'
import { Config } from 'lib/site.config'

export default function Cart() {
  useInitializeCart()

  return (
    <>
      <PageSEO title="Cart" path="/cart" ogImageUrl={Config.defaultOGImage} />
      <div className="pt-2">
        <ContentWrapper>
          <CartItems />
        </ContentWrapper>
      </div>
    </>
  )
}
