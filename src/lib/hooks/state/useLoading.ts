import { useState, useEffect, useRef, useCallback } from 'react'

type useLoadingType = {
  loadingState: boolean
  setLoadingState: (loadingState: boolean) => void
}

export const useLoading = (): useLoadingType => {
  const [loadingState, setLoading] = useState<boolean>(false)
  const mountedRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  })

  const setLoadingState = useCallback((loadingState: boolean): void => {
    // Check to see if it is still mounted
    mountedRef.current && setLoading(loadingState)
  }, [])

  return {
    loadingState,
    setLoadingState,
  }
}
