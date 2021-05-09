import { FC, useEffect, useRef } from 'react'
import { Item } from 'components/root'
import { TypeItem } from 'lib/Type'
import {
  useCount,
  useRecoilCategory,
  useRecoilFocusItem,
} from 'lib/hooks/state'
import s from './ItemsByCategory.module.css'

type Props = {
  items: TypeItem[]
}

export const ItemsByCategory: FC<Props> = ({ items }) => {
  const { count, setCount } = useCount()
  const ref = useRef<HTMLHeadingElement | null>(null)
  const { getCategoryState } = useRecoilCategory()
  const { getFocusItemState } = useRecoilFocusItem()
  const categoryState = getCategoryState()
  const focusItemState = getFocusItemState()

  useEffect(() => {
    if (count === 0) {
      // Focus on main when the parent component is rendered.
      setCount(1)
    } else {
      // Focus on heading element when the child component is rendered.
      ref.current?.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryState])

  if (categoryState === 'ALL') {
    return (
      <>
        <div className="under-line flex py-1.5">
          <h2 ref={ref} tabIndex={-1}>
            ALL
          </h2>
        </div>
        <div className={s.items}>
          {items
            .slice(0)
            .reverse()
            .map((item, i) => (
              <Item
                key={`post-item-${i}`}
                item={item}
                focused={focusItemState === item.id}
              />
            ))}
        </div>
      </>
    )
  } else if (categoryState === 'NEW ARRIVAL') {
    return (
      <>
        <div className="under-line flex py-1.5">
          <h2 ref={ref} tabIndex={-1}>
            NEW ARRIVAL
          </h2>
        </div>
        <div className={s.items}>
          {items
            .slice(-10)
            .reverse()
            .map((item, i) => (
              <Item
                key={`post-item-${i}`}
                item={item}
                focused={focusItemState === item.id}
              />
            ))}
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="under-line flex py-1.5">
          <h2 ref={ref} tabIndex={-1}>
            {categoryState}
          </h2>
        </div>
        <div className={s.items}>
          {items
            .slice(0)
            .reverse()
            .map(
              (item, i) =>
                item.productType === categoryState && (
                  <Item
                    key={`post-item-${i}`}
                    item={item}
                    focused={focusItemState === item.id}
                  />
                )
            )}
        </div>
      </>
    )
  }
}
