import { useCallback } from 'react'
import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
dayjs.locale(ja)
import { useAddItem } from 'lib/hooks/cart'
import { toast } from 'react-toastify'

type useHandleAddItemType = {
  handleAddItem: (
    variantIdState: string | null,
    setLoadingState: (loadingState: boolean) => void
  ) => Promise<void>
}

export const useHandleAddItem = (): useHandleAddItemType => {
  const { AddItem } = useAddItem()

  const handleAddItem = useCallback(
    async (
      variantIdState: string | null,
      setLoadingState: (loadingState: boolean) => void
    ): Promise<void> => {
      if (!variantIdState) return
      setLoadingState(true)
      const nowTime = dayjs().toDate().toString()
      try {
        await AddItem(variantIdState, nowTime)
        // Show toast
        toast('BAGに追加しました')
        setLoadingState(false)
      } catch (err) {
        setLoadingState(false)
      }
    },
    [AddItem]
  )

  return {
    handleAddItem,
  }
}
