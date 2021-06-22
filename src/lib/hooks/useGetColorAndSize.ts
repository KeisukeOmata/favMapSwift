import { Detail } from 'lib/Type'
import { useState, useEffect } from 'react'

type useGetColorAndSizeType = {
  colors: string[]
  colorState: string
  sizes: string[]
  sizeState: string
  setColorState: (colorState: string) => void
  setSizeState: (sizeState: string) => void
}

export const useGetColorAndSize = (
  detail: Detail,
  setAvailableState: (availableState: boolean) => void,
  setVariantIdState: (variantIdState: string) => void
): useGetColorAndSizeType => {
  const [colorState, setColorState] = useState<string>(detail.variants.map((variant) => variant.color)[0])
  const [sizeState, setSizeState] = useState<string>(detail.variants.map((variant) => variant.size)[0])

  const colors = [...new Set(detail.variants.map((variant) => variant.color))]
  const sizes = [...new Set(detail.variants.map((variant) => variant.size))]

  useEffect(() => {
    const variant = detail.variants.filter((variant) => variant.color === colorState && variant.size === sizeState)[0]

    setAvailableState(variant.available)
    setVariantIdState(variant.id)
  }, [detail.variants, colorState, sizeState, setAvailableState, setVariantIdState])

  return {
    colors,
    sizes,
    colorState,
    sizeState,
    setColorState,
    setSizeState,
  }
}
