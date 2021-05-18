import {
  ProductVariant,
  Product,
  Cart as SdkCart,
  CustomAttribute,
} from 'shopify-buy'

// cart
export type Sku = {
  id: string
  selectedOptions: SelectedOption[]
  image: {
    altText?: string | null
  }
  product: {
    id: string
  }
} & ProductVariant

export type LineItem = {
  id: string
  title: string
  quantity: number
  customAttributes: CustomAttribute[]
  variant: Sku
}

export type Cart = {
  lineItems: LineItem[]
  webUrl: string
} & SdkCart

// items(root)
export type ItemType = {
  id: string
  images: string[]
  title: string
  price: string
  productType: string
}

export type GetItem = {
  productType: string
} & Product

// item([id].tsx)
export type Detail = {
  title: string
  images: string[]
  vendor: string
  price: string
  descriptionHtml: string
  variants: Variant[]
}

export type Variant = {
  id: string
  color: string
  size: string
  available: boolean
}

export type GetDescriptionHtml = {
  descriptionHtml: string
} & Product

export type GetVariant = {
  selectedOptions: SelectedOption[]
} & ProductVariant

export type SelectedOption = {
  name: string
  value: string
}
