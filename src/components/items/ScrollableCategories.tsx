import { FC } from 'react'
import { atom, useRecoilState } from 'recoil'
import cn from 'classnames'
import { categories } from 'lib/categories'
import s from 'styles/components/items/ScrollableCategories.module.scss'

export const categoryAtom = atom<string | null>({
  key: 'categoryStateKey',
  default: '新着',
})

export const ScrollableCategories: FC = () => {
  const [categoryState, setCategoryState] = useRecoilState(categoryAtom)

  return (
    <>
      <div className={s.scrollableCategories}>
        {categories.map((category, i) => (
          <div key={`category-${i}`} className={s.scrollableCategory__link}>
            <button
              aria-label={`${category.name}を表示する`}
              className={cn(
                s.scrollableCategory__name,
                categoryState == category.name ? s.chosen : s.notChoose
              )}
              onClick={() => setCategoryState(category.name as string)}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
