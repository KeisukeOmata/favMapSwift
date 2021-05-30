import { atom, useRecoilState } from 'recoil'

type useRecoilFocusItemType = {
  focusItemState: string | null
  setFocusItemState: (focusItemState: string | null) => void
}

const focusItemAtom = atom<string | null>({
  key: 'focusItemAtomKey',
  default: null,
})

export const useRecoilFocusItem = (): useRecoilFocusItemType => {
  const [focusItemState, setFocusItemState] = useRecoilState(focusItemAtom)

  return {
    focusItemState,
    setFocusItemState,
  }
}
