import { Variant, GetVariant } from 'lib/Type'

export const getVariants = (productVariants: GetVariant[]): Variant[] => {
  const variants = productVariants
    .map((variant) => {
      const color = variant.selectedOptions.find(
        (option) => option.name === 'Color'
      )?.value
      const size = variant.selectedOptions.find(
        (option) => option.name === 'Size'
      )?.value

      if (!color || !size) {
        return undefined
      }

      const newVariant: Variant = {
        id: variant.id as string,
        available: variant.available,
        color: color,
        size: size,
      }
      return newVariant
    })
    .filter((variant) => variant !== undefined) as Variant[]
  return variants
}
