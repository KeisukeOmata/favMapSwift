import { FC, memo } from 'react'
import { Button } from 'components/ui'
import { CheckMark } from 'components/icons'
import { useGetColorAndSize } from 'lib/hooks/useGetColorAndSize'
import { Detail } from 'lib/Type'

type Props = {
  detail: Detail
  setIdState: (idState: string) => void
  setAvailableState: (availableState: boolean) => void
}

export const ColorAndSize: FC<Props> = memo(
  ({ detail, setIdState, setAvailableState }) => {
    const {
      colors,
      sizes,
      colorState,
      sizeState,
      setColorState,
      setSizeState,
    } = useGetColorAndSize(detail, setIdState, setAvailableState)

    return (
      <>
        <div>Color</div>
        <div className="flex upper-line py-4">
          {colors.map((color, i) => (
            <Button
              key={`colors-${i}`}
              className="mb-1.5 mr-1.5"
              color={color}
              shape="circle"
              type="button"
              aria-label={`${color}色を選択する`}
              onClick={() => setColorState(color)}
            >
              {colorState === color && <CheckMark colorState={colorState} />}
            </Button>
          ))}
        </div>
        <div>Size</div>
        <div className="flex upper-line py-4">
          {sizes.map((size, i) => (
            <Button
              key={`sizes-${i}`}
              className="mb-1.5 mr-1.5"
              shape="circle"
              type="button"
              choose={sizeState === size ? true : false}
              aria-label={`${size}サイズを選択する`}
              onClick={() => setSizeState(size)}
            >
              {size}
            </Button>
          ))}
        </div>
      </>
    )
  }
)

ColorAndSize.displayName = 'ColorAndSize'
