import { useCallback } from 'react'
import { useChangeQuantity } from 'lib/hooks/cart'

type useHandleChangeQuantityType = {
  handleChangeQuantity: (
    cartItemId: string,
    cartItemQuantity: number,
    setLoadingState: (loadingState: boolean) => void
  ) => Promise<void>
}

export const useHandleChangeQuantity = (): useHandleChangeQuantityType => {
  const { ChangeQuantity } = useChangeQuantity()

  const handleChangeQuantity = useCallback(
    async (
      cartItemId: string,
      cartItemQuantity: number,
      setLoadingState: (loadingState: boolean) => void
    ): Promise<void> => {
      setLoadingState(true)
      try {
        await ChangeQuantity(cartItemId, cartItemQuantity)
        setLoadingState(false)
      } catch (err) {
        setLoadingState(false)
      }
    },
    [ChangeQuantity]
  )

  return {
    handleChangeQuantity,
  }
}
