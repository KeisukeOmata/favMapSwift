import { useState, useCallback } from 'react'

type useCountType = {
  countState: number
  setCountState: (countState: number) => void
}

export const useCount = (): useCountType => {
  const [countState, setCount] = useState<number>(0)

  const setCountState = useCallback((countState: number): void => {
    setCount(countState)
  }, [])

  return {
    countState,
    setCountState,
  }
}
