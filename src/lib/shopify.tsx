import Client from 'shopify-buy'

export const shopify = Client.buildClient({
  domain: `${process.env.SHOPIFY_STORE_ID}.myshopify.com`,
  storefrontAccessToken: process.env.SHOPIFY_API_TOKEN as string,
  language: 'ja-JP',
})
