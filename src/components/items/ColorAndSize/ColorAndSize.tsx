import { FC } from 'react'
import { Button } from 'components/ui'
import { useGetColorAndSize } from 'lib/hooks/useGetColorAndSize'
import { TypeItem, Sku } from 'lib/Type'

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
      <div className="flex upper-line py-4">
        {colors?.values.map((color, i) => (
          <Button
            key={`colors-${i}`}
            className="mb-1.5 mr-1.5"
            color={color.value}
            shape="circle"
            choose={colorState == color.value ? true : false}
            type="button"
            aria-label={`${color.value}色を選択する`}
            onClick={() => setColorState(color.value)}
          ></Button>
        ))}
      </div>
      <div>Size</div>
      <div className="flex upper-line py-4">
        {sizes?.values.map((size, i) => (
          <Button
            key={`sizes-${i}`}
            className="mb-1.5 mr-1.5"
            shape="circle"
            type="button"
            choose={sizeState == size.value ? true : false}
            aria-label={`${size}サイズを選択する`}
            onClick={() => setSizeState(size.value)}
          >
            {size.value}
          </Button>
        ))}
      </div>
    </>
  )
}
