import { useState, useCallback } from 'react'

type useIdType = {
  idState: string | null
  setIdState: (idState: string) => void
}

export const useId = (): useIdType => {
  const [idState, setId] = useState<string | null>(null)

  const setIdState = useCallback((idState: string): void => {
    setId(idState)
  }, [])

  return {
    idState,
    setIdState,
  }
}
