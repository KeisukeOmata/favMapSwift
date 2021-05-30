import { atom, useRecoilState } from 'recoil'

type useRecoilCategoryType = {
  categoryState: string
  setCategoryState: (categoryState: string) => void
}

const categoryAtom = atom<string>({
  key: 'categoryAtomKey',
  default: 'NEW ARRIVAL',
})

export const useRecoilCategory = (): useRecoilCategoryType => {
  const [categoryState, setCategoryState] = useRecoilState(categoryAtom)

  return {
    categoryState,
    setCategoryState,
  }
}
