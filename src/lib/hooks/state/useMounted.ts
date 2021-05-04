import { useState, useCallback } from 'react'

type useMountedType = {
  mounted: boolean
  setMounted: (mounted: boolean) => void
}

export const useMounted = (): useMountedType => {
  const [mounted, setMountedState] = useState<boolean>(false)

  const setMounted = useCallback((mounted: boolean): void => {
    setMountedState(mounted)
  }, [])

  return {
    mounted,
    setMounted,
  }
}
