import { FC } from 'react'
import { CheckMark } from 'components/icons'
import { Button } from 'components/ui'

type Props = {
  colors: string[]
  colorState: string
  mountedState: boolean
  sizes: string[]
  sizeState: string
  theme: string | undefined
  setColorState: (colorState: string) => void
  setMountedState: (mountedState: boolean) => void
  setSizeState: (sizeState: string) => void
}

export const ColorAndSize: FC<Props> = ({
  colors,
  mountedState,
  colorState,
  sizes,
  sizeState,
  theme,
  setColorState,
  setMountedState,
  setSizeState,
}) => {
  return (
    <>
      <div>Color</div>
      <div className="flex upper-line py-4">
        {colors.map((color, i) => (
          <Button
            aria-label={`${color}色を選択する`}
            key={`colors-${i}`}
            className="mb-1.5 mr-1.5"
            color={color}
            shape="circle"
            type="button"
            onClick={() => setColorState(color)}
          >
            {colorState === color && (
              <CheckMark
                colorState={colorState}
                mountedState={mountedState}
                setMountedState={setMountedState}
                theme={theme}
              />
            )}
          </Button>
        ))}
      </div>
      <div>Size</div>
      <div className="flex upper-line py-4">
        {sizes.map((size, i) => (
          <Button
            aria-label={`${size}サイズを選択する`}
            key={`sizes-${i}`}
            choose={sizeState === size ? true : false}
            className="mb-1.5 mr-1.5"
            shape="circle"
            type="button"
            onClick={() => setSizeState(size)}
          >
            {size}
          </Button>
        ))}
      </div>
    </>
  )
}
