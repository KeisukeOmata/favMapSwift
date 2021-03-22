import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

type useRecoilType = {
  getCategoryState: () => string
  setCategoryState: (categoryState: string) => void
}

const categoryAtom = atom<string>({
  key: 'categoryAtomKey',
  default: '新着',
})

export const useRecoilCategory = (): useRecoilType => {
  const categoryState = useRecoilValue(categoryAtom)
  const setCategoryStateToRecoil = useSetRecoilState(categoryAtom)

  const getCategoryState = (): string => {
    return categoryState
  }

  const setCategoryState = (categoryState: string): void => {
    setCategoryStateToRecoil(categoryState)
  }

  return {
    getCategoryState,
    setCategoryState,
  }
}
