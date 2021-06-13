import { FC, useRef, useEffect } from 'react'
import cn from 'classnames'
import { categories } from 'lib/categories'
import { useRecoilCategory } from 'lib/hooks/state'
import s from './Categories.module.css'

export const Categories: FC = () => {
  const { categoryState, setCategoryState } = useRecoilCategory()
  const categoriesRef = useRef<HTMLDivElement>(null)
  const categoryStateRef = useRef<string | null>(null)
  categoryStateRef.current = categoryState

  useEffect(() => {
    if (!categoriesRef.current || !categoryStateRef.current) {
      return
    }
    const selectedCategory = categoriesRef.current.getElementsByClassName(
      `category-${categoryStateRef.current}`
    )[0] as HTMLElement
    if (!selectedCategory) {
      return
    }
    categoriesRef.current.scrollLeft =
      // 24px margin for the first category
      selectedCategory.offsetLeft - categoriesRef.current.offsetLeft - 24
  }, [categoryState])

  return (
    <>
      <div className={s.categories} ref={categoriesRef}>
        {categories.map((category, i) => (
          <div
            key={`category-${i}`}
            className={[s.category, `category-${category.name}`].join(' ')}
          >
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
