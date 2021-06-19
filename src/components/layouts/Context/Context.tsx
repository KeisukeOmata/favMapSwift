import { FC } from 'react'
import { useInitializeCart, useFetchCart } from 'lib/hooks/cart'

export const Context: FC = ({ children }) => {
  useFetchCart()
  useInitializeCart()
  return <div className="flex flex-col min-h-screen">{children}</div>
}
