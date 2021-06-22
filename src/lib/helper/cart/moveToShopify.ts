import { Cart } from 'lib/Type'
import { resetCheckoutId } from 'lib/helper/cart'

export const moveToShopify = (cart: Cart): void => {
  // Move to Shopify
  window.open(cart.webUrl)
  // Delete checkoutId from local storage
  resetCheckoutId()
}
