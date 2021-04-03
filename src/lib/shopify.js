import Client from 'shopify-buy'

export const shopify = Client.buildClient({
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_API_TOKEN,
  domain: `${process.env.NEXT_PUBLIC_SHOPIFY_STORE_ID}.myshopify.com`,
  language: 'ja-JP',
})
