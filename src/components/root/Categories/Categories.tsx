import { FC } from 'react'
import cn from 'classnames'
import { categories } from 'lib/categories'
import { useRecoilCategory } from 'lib/hooks/state'
import s from './Categories.module.css'

export const Categories: FC = () => {
  const { categoryState, setCategoryState } = useRecoilCategory()

  return (
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
}
