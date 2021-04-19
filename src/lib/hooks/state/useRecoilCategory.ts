import { useCallback } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

type useRecoilCategoryType = {
  getCategoryState: () => string
  setCategoryState: (categoryState: string) => void
}

const categoryAtom = atom<string>({
  key: 'categoryAtomKey',
  default: 'NEW ARRIVAL',
})

export const useRecoilCategory = (): useRecoilCategoryType => {
  const categoryState = useRecoilValue(categoryAtom)
  const setCategoryStateToRecoil = useSetRecoilState(categoryAtom)

  const getCategoryState = useCallback((): string => {
    return categoryState
  }, [categoryState])

  const setCategoryState = useCallback(
    (categoryState: string): void => {
      setCategoryStateToRecoil(categoryState)
    },
    [setCategoryStateToRecoil]
  )

  return {
    getCategoryState,
    setCategoryState,
  }
}
