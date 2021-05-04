import { useState, useCallback } from 'react'

type useLoadingType = {
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const useLoading = (): useLoadingType => {
  const [loading, setLoadingState] = useState<boolean>(false)

  const setLoading = useCallback((loading: boolean): void => {
    setLoadingState(loading)
  }, [])

  return {
    loading,
    setLoading,
  }
}
