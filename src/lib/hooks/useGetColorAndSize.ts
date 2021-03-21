import { useState, useEffect } from 'react'
import { TypeItem, Sku, Option } from 'lib/Type'

type useGetColorAndSizeType = {
  colors: Option | undefined
  sizes: Option | undefined
  colorState: string | null
  sizeState: string | null
  setColorState: (colorState: string | null) => void
  setSizeState: (colorState: string | null) => void
}

export const useGetColorAndSize = (
  detail: TypeItem,
  variants: Sku[],
  setItemIdState: (itemIdState: string | null) => void
): useGetColorAndSizeType => {
  const colors = detail.options.find((option) => option.name === 'Color')
  const sizes = detail.options.find((option) => option.name === 'Size')
  const [colorState, setColorState] = useState<string | null>(
    colors?.values[0].value
  )
  const [sizeState, setSizeState] = useState<string | null>(
    sizes?.values[0].value
  )

  useEffect(() => {
    for (const i in variants) {
      const variant = variants[i]
      const selectedOptionValues = Object.values(variant.selectedOptions).map(
        (selectedOption) => selectedOption.value
      )
      if (
        selectedOptionValues.includes(colorState as string) &&
        selectedOptionValues.includes(sizeState as string)
      ) {
        setItemIdState(variant.id)
      }
    }
  }, [colorState, sizeState])

  return {
    colors,
    sizes,
    colorState,
    sizeState,
    setColorState,
    setSizeState,
  }
}
