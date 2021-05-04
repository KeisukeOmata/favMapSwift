import { useState, useCallback } from 'react'

type useIdType = {
  id: string | null
  setId: (id: string) => void
}

export const useId = (): useIdType => {
  const [id, setIdState] = useState<string | null>(null)

  const setId = useCallback((id: string): void => {
    setIdState(id)
  }, [])

  return {
    id,
    setId,
  }
}
