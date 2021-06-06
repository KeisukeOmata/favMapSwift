export const getCheckoutId = (): string => {
  return localStorage.getItem('checkoutId') ?? ''
}
