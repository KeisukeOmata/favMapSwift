import { ItemType, GetItem } from 'lib/Type'

export const getItems = (products: GetItem[]): ItemType[] => {
  const items = products.map((product) => {
    const newItem: ItemType = {
      id: product.id as string,
      images: product.images.map((image) => image.src),
      price: product.variants[0].price,
      productType: product.productType,
      title: product.title,
    }
    return newItem
  })
  return items
}
