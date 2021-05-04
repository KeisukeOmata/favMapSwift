import { useState, useCallback } from 'react'

type useAvailableType = {
  available: boolean
  setAvailable: (available: boolean) => void
}

export const useAvailable = (): useAvailableType => {
  const [available, setAvailableState] = useState<boolean>(true)

  const setAvailable = useCallback((available: boolean): void => {
    setAvailableState(available)
  }, [])

  return {
    available,
    setAvailable,
  }
}
