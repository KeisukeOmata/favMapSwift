import { useState, useCallback } from 'react'

type useAvailableType = {
  availableState: boolean
  setAvailableState: (availableState: boolean) => void
}

export const useAvailable = (): useAvailableType => {
  const [availableState, setAvailable] = useState<boolean>(true)

  const setAvailableState = useCallback((availableState: boolean): void => {
    setAvailable(availableState)
  }, [])

  return {
    availableState,
    setAvailableState,
  }
}
