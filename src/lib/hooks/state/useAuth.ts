import { useState, useCallback } from 'react'
import firebase from 'firebase/app'

type useRecoilAuthType = {
  currentUser: firebase.User | null
  setCurrentUser: (user: firebase.User | null) => Promise<void>
}

export const useAuth = (): useRecoilAuthType => {
  const [currentUser, setCurrentUserState] =
    useState<firebase.User | null>(null)

  const setCurrentUser = useCallback(
    async (user: firebase.User | null): Promise<void> => {
      await setCurrentUserState(user)
    },
    []
  )

  return {
    currentUser,
    setCurrentUser,
  }
}
