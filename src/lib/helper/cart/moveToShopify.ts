import { resetCheckoutId } from 'lib/helper/cart'
import { Cart } from 'lib/Type'

export const moveToShopify = (cart: Cart): void => {
  // Move to Shopify
  window.open(cart.webUrl)
  // Delete checkoutId from local storage
  resetCheckoutId()
}
