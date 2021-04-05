import {
  Option as SdkOption,
  ProductVariant as SdkProductVariant,
  Product as SdkProduct,
  Cart as SdkCart,
  CustomAttribute,
} from 'shopify-buy'

export type SelectedOption = {
  name: string
  value: string
}

export type Sku = {
  id: string
  selectedOptions: SelectedOption[]
  image: {
    altText?: string | null
  }
  product: {
    id: string
  }
} & SdkProductVariant

export type Option = SdkOption

export type TypeItem = {
  id: string
  productType: string | null
  descriptionHtml: string
} & SdkProduct

export type LineItem = {
  id: string
  title: string
  quantity: number
  variant: Sku
  customAttributes: CustomAttribute[]
}

export type Cart = {
  lineItems: LineItem[]
  webUrl: string
} & SdkCart
