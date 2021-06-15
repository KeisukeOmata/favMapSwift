import { useState, useEffect } from 'react'

type useMountedStateType = {
  mountedState: boolean
}

export const useMountedState = (): useMountedStateType => {
  const [mountedState, setMountedState] = useState<boolean>(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMountedState(true), [setMountedState])

  return {
    mountedState,
  }
}
