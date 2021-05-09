import { FC } from 'react'
import { Button } from 'components/ui'
import { CheckMark } from 'components/icons'
import { useGetColorAndSize } from 'lib/hooks/useGetColorAndSize'
import { TypeItem, Sku } from 'lib/Type'

type Props = {
  detail: TypeItem
  variants: Sku[]
  setItemIdState: (itemIdState: string) => void
  setAvailableState: (availableState: boolean) => void
}

export const ColorAndSize: FC<Props> = ({
  detail,
  variants,
  setItemIdState,
  setAvailableState,
}) => {
  const {
    colors,
    sizes,
    colorState,
    sizeState,
    setColorState,
    setSizeState,
  } = useGetColorAndSize(detail, variants, setItemIdState, setAvailableState)

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
            type="button"
            aria-label={`${color.value}色を選択する`}
            onClick={() => setColorState(color.value)}
          >
            {colorState === color.value && (
              <CheckMark colorState={colorState} />
            )}
          </Button>
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
            choose={sizeState === size.value ? true : false}
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
