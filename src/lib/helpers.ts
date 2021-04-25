import { SelectedOption, Cart } from 'lib/Type'

export const getCheckoutId = (): string => {
  return localStorage.getItem('checkoutId') ?? ''
}

export const setCheckoutId = (checkoutId: string | number): void => {
  localStorage.setItem('checkoutId', String(checkoutId))
}

// Delete checkoutId from local storage
export const resetCheckoutId = (): void => {
  localStorage.removeItem('checkoutId')
}

export const getColorAndSize = (
  options: SelectedOption[],
  name: string
): string => {
  return options.find((option) => option.name === name)?.value ?? ''
}

export const presenceCheck = (
  cartState: Cart,
  itemIdState: string | number
): string => {
  return (
    cartState.lineItems.find((lineItem) => lineItem.variant.id === itemIdState)
      ?.variant.id ?? ''
  )
}

export const getCartItemId = (
  cartState: Cart,
  itemIdState: string | number
): string => {
  return (
    cartState.lineItems.find((lineItem) => lineItem.variant.id === itemIdState)
      ?.id ?? ''
  )
}

export const getCurrentQuantity = (
  cartState: Cart,
  itemIdState: string | number
): number => {
  return (
    cartState.lineItems.find((lineItem) => lineItem.variant.id === itemIdState)
      ?.quantity ?? 0
  )
}

export const getItemPath = (id: string): string => {
  return `/items/${encodeURIComponent(id)}`
}
