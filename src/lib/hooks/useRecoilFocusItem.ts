import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

type useRecoilType = {
  getFocusItemState: () => string | null
  setFocusItemState: (focusItemState: string | null) => void
}

const focusItemAtom = atom<string | null>({
  key: 'focusItemAtomKey',
  default: null,
})

export const useRecoilFocusItem = (): useRecoilType => {
  const focusItemState = useRecoilValue(focusItemAtom)
  const setFocusItemStateToRecoil = useSetRecoilState(focusItemAtom)

  const getFocusItemState = (): string | null => {
    return focusItemState
  }

  const setFocusItemState = (focusItemState: string | null): void => {
    setFocusItemStateToRecoil(focusItemState)
  }

  return {
    getFocusItemState,
    setFocusItemState,
  }
}
