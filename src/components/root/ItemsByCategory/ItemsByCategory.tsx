import { FC, useEffect, useRef } from 'react'
import { Item } from 'components/root'
import { ItemType } from 'lib/Type'
import s from './ItemsByCategory.module.css'

type Props = {
  items: ItemType[]
  categoryState: string
  countState: number
  focusItemState: string | null
  setCountState: (countState: number) => void
  setFocusItemState: (focusItemState: string | null) => void
}

export const ItemsByCategory: FC<Props> = ({
  items,
  categoryState,
  countState,
  focusItemState,
  setCountState,
  setFocusItemState,
}) => {
  const ref = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    if (countState === 0) {
      // Focus on main when the parent component is rendered.
      setCountState(1)
    } else {
      // Focus on head element when the child component is rendered.
      ref.current?.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryState])

  switch (categoryState) {
    case 'ALL':
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
                  setFocusItemState={setFocusItemState}
                />
              ))}
          </div>
        </>
      )
    case 'NEW ARRIVAL':
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
                  setFocusItemState={setFocusItemState}
                />
              ))}
          </div>
        </>
      )
    default:
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
                      setFocusItemState={setFocusItemState}
                    />
                  )
              )}
          </div>
        </>
      )
  }
}
