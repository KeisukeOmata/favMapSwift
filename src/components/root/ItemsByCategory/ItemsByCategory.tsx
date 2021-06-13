import { FC, useState, useEffect, useRef } from 'react'
import { Item } from 'components/root'
import { useRecoilCategory, useRecoilFocusItem } from 'lib/hooks/state'
import { ItemType } from 'lib/Type'

type Props = {
  items: ItemType[]
}

export const ItemsByCategory: FC<Props> = ({ items }) => {
  const [countState, setCountState] = useState<number>(0)
  const { categoryState } = useRecoilCategory()
  const { focusItemState } = useRecoilFocusItem()
  const ref = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    countState === 0
      ? // Focus on main when the parent component is rendered.
        setCountState(1)
      : // Focus on head element when the child component is rendered.
        ref.current?.focus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryState])

  switch (categoryState) {
    case 'ALL':
      return (
        <>
          <div className="flex py-1.5 under-line">
            <h2 ref={ref} tabIndex={-1}>
              ALL
            </h2>
          </div>
          <div className="flex flex-wrap justify-between pt-1">
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
    case 'NEW ARRIVAL':
      return (
        <>
          <div className="flex py-1.5 under-line">
            <h2 ref={ref} tabIndex={-1}>
              NEW ARRIVAL
            </h2>
          </div>
          <div className="flex flex-wrap justify-between pt-1">
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
    default:
      return (
        <>
          <div className="flex py-1.5 under-line">
            <h2 ref={ref} tabIndex={-1}>
              {categoryState}
            </h2>
          </div>
          <div className="flex flex-wrap justify-between pt-1">
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
