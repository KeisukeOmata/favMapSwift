import { FC } from 'react'
import cn from 'classnames'
import { categories } from 'lib/categories'
import { useRecoilCategory } from 'lib/hooks/state'
import s from './ScrollableCategories.module.css'

export const ScrollableCategories: FC = () => {
  const { getCategoryState, setCategoryState } = useRecoilCategory()
  const categoryState = getCategoryState()

  return (
    <>
      <div className={s.categories}>
        {categories.map((category, i) => (
          <div key={`category-${i}`} className={s.category}>
            <button
              aria-label={`${category.name}を表示する`}
              className={cn(
                'block mt-2 text-base whitespace-nowrap',
                categoryState === category.name ? s.chosen : s.notChoose
              )}
              onClick={() => setCategoryState(category.name)}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
