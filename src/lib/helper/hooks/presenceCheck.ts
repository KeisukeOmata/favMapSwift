import { Cart } from 'lib/Type'

export const presenceCheck = (cartState: Cart, itemIdState: string): string => {
  return cartState.lineItems.find((lineItem) => lineItem.variant.id === itemIdState)?.variant.id ?? ''
}
