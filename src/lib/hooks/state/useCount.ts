import { useState, useCallback } from 'react'

type useCountType = {
  count: number
  setCount: (count: number) => void
}

export const useCount = (): useCountType => {
  const [count, setCountState] = useState<number>(0)

  const setCount = useCallback((count: number): void => {
    setCountState(count)
  }, [])

  return {
    count,
    setCount,
  }
}
