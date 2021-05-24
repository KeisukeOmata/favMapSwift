/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useRef } from 'react'
import { CartItem } from 'components/cart'
import { PageSEO, ContentWrapper } from 'components/layouts'
import { CartCheckout } from 'components/cart/CartCheckout'
import { useRecoilCart, useLoading } from 'lib/hooks/state'
import {
  useInitializeCart,
  useFetchCart,
  useChangeQuantity,
  useRemoveItem,
} from 'lib/hooks/cart'
import { Config } from 'lib/site.config'
import { Cart, SelectedOption } from 'lib/Type'

export default function CartPage() {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { ChangeQuantity } = useChangeQuantity()
  const { loadingState, setLoadingState } = useLoading()
  const { getCartState } = useRecoilCart()
  const cart = getCartState()
  const { RemoveItem } = useRemoveItem()
  useFetchCart()
  useInitializeCart()

  const getColorAndSize = (options: SelectedOption[], name: string): string => {
    return options.find((option) => option.name === name)?.value ?? ''
  }

  const handleChangeQuantity = async (
    cartItemId: string,
    cartItemQuantity: number
  ): Promise<void> => {
    setLoadingState(true)
    try {
      await ChangeQuantity(cartItemId, cartItemQuantity)
      setLoadingState(false)
    } catch (err) {
      setLoadingState(false)
    }
  }

  const handleRemoveItem = async (cartItemId: string): Promise<void> => {
    setLoadingState(true)
    try {
      await RemoveItem(cartItemId)
      setLoadingState(false)
    } catch (err) {
      setLoadingState(false)
    }
  }

  const moveToShopify = (cart: Cart): void => {
    // Move to Shopify
    window.open(cart.webUrl)
    // Delete checkoutId from local storage
    localStorage.removeItem('checkoutId')
  }

  return (
    <>
      <PageSEO title="Cart" path="/cart" ogImageUrl={Config.defaultOGImage} />
      <div className="pt-2">
        <ContentWrapper>
          {cart && (
            <>
              {cart.lineItems.length === 0 ? (
                <div className="under-line flex py-1.5">
                  <h2 id="head" tabIndex={-1}>
                    BAGが空です
                  </h2>
                </div>
              ) : (
                <>
                  <div className="under-line flex py-1.5">
                    <h2 id="head" tabIndex={-1}>
                      BAG
                    </h2>
                  </div>
                  {cart.lineItems.map((item, i) =>
                    item.variant ? (
                      <CartItem
                        key={`cart-item-${i}`}
                        item={item}
                        loadingState={loadingState}
                        getColorAndSize={getColorAndSize}
                        handleChangeQuantity={handleChangeQuantity}
                        handleRemoveItem={handleRemoveItem}
                      />
                    ) : (
                      // Reset cart because product information is outdated
                      localStorage.removeItem('checkoutId')
                    )
                  )}
                  <CartCheckout
                    cart={cart}
                    buttonRef={buttonRef}
                    moveToShopify={moveToShopify}
                  />
                </>
              )}
            </>
          )}
        </ContentWrapper>
      </div>
    </>
  )
}
