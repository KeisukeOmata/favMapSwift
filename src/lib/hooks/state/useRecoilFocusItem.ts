import { useCallback } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

type useRecoilFocusItemType = {
  getFocusItemState: () => string | null
  setFocusItemState: (focusItemState: string | null) => void
}

const focusItemAtom = atom<string | null>({
  key: 'focusItemAtomKey',
  default: null,
})

export const useRecoilFocusItem = (): useRecoilFocusItemType => {
  const focusItemState = useRecoilValue(focusItemAtom)
  const setFocusItemStateToRecoil = useSetRecoilState(focusItemAtom)

  const getFocusItemState = useCallback((): string | null => {
    return focusItemState
  }, [focusItemState])

  const setFocusItemState = useCallback(
    (focusItemState: string | null): void => {
      setFocusItemStateToRecoil(focusItemState)
    },
    [setFocusItemStateToRecoil]
  )

  return {
    getFocusItemState,
    setFocusItemState,
  }
}
