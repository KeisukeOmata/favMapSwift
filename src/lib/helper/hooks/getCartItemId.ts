import { Cart } from 'lib/Type'

export const getCartItemId = (cartState: Cart, itemIdState: string): string => {
  return cartState.lineItems.find((lineItem) => lineItem.variant.id === itemIdState)?.id ?? ''
}
