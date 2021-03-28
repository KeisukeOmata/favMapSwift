/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CartItems } from 'components/cart'
import { PageSEO, ContentWrapper } from 'components/layouts'
import { useFetchCart, useInitializeCart } from 'lib/hooks/cart'
import { useRecoilCart } from 'lib/hooks/state'
import { Config } from 'lib/site.config'

export default function Cart() {
  const { getCartState } = useRecoilCart()
  useInitializeCart()
  useFetchCart()
  const cartState = getCartState()

  return (
    <>
      <PageSEO title="Cart" path="/cart" ogImageUrl={Config.defaultOGImage} />
      <div className="pt-2 pb-12">
        <ContentWrapper>
          {cartState === null ? <div>loading...</div> : <CartItems />}
        </ContentWrapper>
      </div>
    </>
  )
}
