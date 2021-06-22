import { Detail, GetDetail, GetVariant } from 'lib/Type'
import { getDescriptionHtml, getVariants } from 'lib/helper/items'

export const getDetail = (product: GetDetail): Detail => {
  const item: Detail = {
    descriptionHtml: getDescriptionHtml(product),
    images: product.images.map((image) => image.src),
    price: product.variants[0].price,
    title: product.title,
    variants: getVariants(product.variants as GetVariant[]),
    vendor: product.vendor,
  }
  return item
}
