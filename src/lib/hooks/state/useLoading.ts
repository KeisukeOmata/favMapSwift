import { useState, useEffect, useRef, useCallback } from 'react'

type useLoadingType = {
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const useLoading = (): useLoadingType => {
  const [loading, setLoadingState] = useState<boolean>(false)
  const mountedRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  })

  const setLoading = useCallback((loading: boolean): void => {
    // Check to see if it is still mounted
    if (mountedRef.current) {
      setLoadingState(loading)
    }
  }, [])

  return {
    loading,
    setLoading,
  }
}
