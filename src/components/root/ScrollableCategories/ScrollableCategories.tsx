import { FC } from 'react'
import cn from 'classnames'
import { categories } from 'lib/categories'
import s from './ScrollableCategories.module.css'

type Props = {
  categoryState: string
  setCategoryState: (categoryState: string) => void
}

export const ScrollableCategories: FC<Props> = ({
  categoryState,
  setCategoryState,
}) => (
  <>
    <div className={s.categories}>
      {categories.map((category, i) => (
        <div key={`category-${i}`} className={s.category}>
          <button
            className={cn(
              'block pt-2 text-sm whitespace-nowrap',
              categoryState === category.name ? s.chosen : s.notChoose
            )}
            aria-label={`${category.name}を表示する`}
            onClick={() => setCategoryState(category.name)}
          >
            {category.name}
          </button>
        </div>
      ))}
    </div>
  </>
)
