import Client from 'shopify-buy'

export const shopify = Client.buildClient({
  storefrontAccessToken: process.env.REACT_APP_ENV_KEY as string,
  domain: 'graphql.myshopify.com',
  language: 'ja-JP',
})
