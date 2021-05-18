import { useState, useCallback } from 'react'

type useMountedType = {
  mountedState: boolean
  setMountedState: (mountedState: boolean) => void
}

export const useMounted = (): useMountedType => {
  const [mountedState, setMounted] = useState<boolean>(false)

  const setMountedState = useCallback((mountedState: boolean): void => {
    setMounted(mountedState)
  }, [])

  return {
    mountedState,
    setMountedState,
  }
}
