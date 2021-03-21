import { FC } from 'react'
import { Button } from 'components/ui'
import { useGetColorAndSize } from 'lib/hooks/useGetColorAndSize'
import { TypeItem, Sku } from 'lib/Type'
import s from './ColorAndSize.module.css'

type props = {
  detail: TypeItem
  variants: Sku[]
  setItemIdState: (itemIdState: string | null) => void
}

export const ColorAndSize: FC<props> = ({
  detail,
  variants,
  setItemIdState,
}) => {
  const {
    colors,
    sizes,
    colorState,
    sizeState,
    setColorState,
    setSizeState,
  } = useGetColorAndSize(detail, variants, setItemIdState)

  return (
    <>
      <div>Color</div>
      <div className={s.parent}>
        {colors?.values.map((color, i) => (
          <div className={s.item} key={i}>
            <Button
              color={color.value}
              shape="circle"
              choose={colorState == color.value ? true : false}
              type="button"
              aria-label={`${color.value}色を選択する`}
              key={`colors-${i}`}
              onClick={() => setColorState(color.value)}
            ></Button>
          </div>
        ))}
      </div>
      <div>Size</div>
      <div className={s.parent}>
        {sizes?.values.map((size, i) => (
          <div className={s.item} key={i}>
            <Button
              shape="circle"
              type="button"
              choose={sizeState == size.value ? true : false}
              aria-label={`${size}サイズを選択する`}
              key={`sizes-${i}`}
              onClick={() => setSizeState(size.value)}
            >
              {size.value}
            </Button>
          </div>
        ))}
      </div>
    </>
  )
}
