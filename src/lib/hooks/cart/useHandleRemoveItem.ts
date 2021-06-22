import { useRemoveItem } from 'lib/hooks/cart'
import { useCallback } from 'react'

type useHandleRemoveItemType = {
  handleRemoveItem: (cartItemId: string, setLoadingState: (loadingState: boolean) => void) => Promise<void>
}

export const useHandleRemoveItem = (): useHandleRemoveItemType => {
  const { RemoveItem } = useRemoveItem()

  const handleRemoveItem = useCallback(
    async (cartItemId: string, setLoadingState: (loadingState: boolean) => void): Promise<void> => {
      setLoadingState(true)
      try {
        await RemoveItem(cartItemId)
        setLoadingState(false)
      } catch (err) {
        setLoadingState(false)
      }
    },
    [RemoveItem]
  )

  return {
    handleRemoveItem,
  }
}
