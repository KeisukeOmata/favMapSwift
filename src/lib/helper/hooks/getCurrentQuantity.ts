import { Cart } from 'lib/Type'

export const getCurrentQuantity = (cartState: Cart, itemIdState: string): number => {
  return cartState.lineItems.find((lineItem) => lineItem.variant.id === itemIdState)?.quantity ?? 0
}
