import { useInitializeCart, useFetchCart } from 'lib/hooks/cart'
import { FC } from 'react'

export const Context: FC = ({ children }) => {
  useFetchCart()
  useInitializeCart()
  return <div className="flex flex-col min-h-screen">{children}</div>
}
