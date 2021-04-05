import { SelectedOption, Cart } from 'lib/Type'

export function getCheckoutId(): string {
  return localStorage.getItem('checkoutId') ?? ''
}

export function setCheckoutId(checkoutId: string | number): void {
  localStorage.setItem('checkoutId', String(checkoutId))
}

// Delete checkoutId from local storage
export function resetCheckoutId(): void {
  localStorage.removeItem('checkoutId')
}

export function getColorAndSize(
  options: SelectedOption[],
  name: string
): string {
  return options.find((option) => option.name === name)?.value ?? ''
}

export function presenceCheck(
  cartState: Cart,
  itemIdState: string | number
): string {
  return (
    cartState.lineItems.find((lineItem) => lineItem.variant.id === itemIdState)
      ?.variant.id ?? ''
  )
}

export function getPresenceCartItemId(
  cartState: Cart,
  itemIdState: string | number
): string {
  return (
    cartState.lineItems.find((lineItem) => lineItem.variant.id === itemIdState)
      ?.id ?? ''
  )
}

export function getPresenceQuantity(
  cartState: Cart,
  itemIdState: string | number
): number {
  return (
    cartState.lineItems.find((lineItem) => lineItem.variant.id === itemIdState)
      ?.quantity ?? 0
  )
}

export function getItemPath(id: string): string {
  return `/items/${encodeURIComponent(id)}`
}
