import { FC, memo } from 'react'
import cn from 'classnames'
import { categories } from 'lib/categories'
import { useRecoilCategory } from 'lib/hooks/state'
import s from './ScrollableCategories.module.css'

export const ScrollableCategories: FC = memo(() => {
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
                'block pt-2 text-sm whitespace-nowrap',
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
})

ScrollableCategories.displayName = 'ScrollableCategories'
