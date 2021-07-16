import { Button } from 'components/ui'
import { Detail } from 'lib/Type'
import { useGetColorAndSize } from 'lib/hooks'
import { FC } from 'react'

type Props = {
  detail: Detail
  setVariantIdState: (variantIdState: string) => void
  setAvailableState: (availableState: boolean) => void
}

export const ColorAndSize: FC<Props> = ({ detail, setVariantIdState, setAvailableState }) => {
  const { colors, colorState, sizes, sizeState, setColorState, setSizeState } = useGetColorAndSize(
    detail,
    setAvailableState,
    setVariantIdState
  )

  return (
    <>
      <div>Color</div>
      <div className="flex py-4 upper-line">
        {colors.map((color, i) => (
          <Button
            aria-label={`${color}色を選択する`}
            key={`colors-${i}`}
            className="mr-1.5 mb-1.5"
            color={color}
            shape="circle"
            type="button"
            checkMark={colorState === color}
            colorState={colorState}
            onClick={() => setColorState(color)}
          ></Button>
        ))}
      </div>
      <div>Size</div>
      <div className="flex py-4 upper-line">
        {sizes.map((size, i) => (
          <Button
            text={`${size}`}
            aria-label={`${size}サイズを選択する`}
            key={`sizes-${i}`}
            choose={sizeState === size ? true : false}
            className="mr-1.5 mb-1.5"
            shape="circle"
            type="button"
            onClick={() => setSizeState(size)}
          ></Button>
        ))}
      </div>
    </>
  )
}
