/* eslint-disable
  @typescript-eslint/no-var-requires
*/
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  // next/image
  images: {
    domains: ['cdn.shopify.com'],
  },
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
})
