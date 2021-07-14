/* eslint-disable
  @typescript-eslint/no-var-requires
*/
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPWA = require('next-pwa')

// If you need more plugins, use next-compose-plugin
// ANALYZE=true yarn build
module.exports = withBundleAnalyzer(
  withPWA({
    pwa: {
      dest: 'public',
      disable: process.env.NEXT_PUBLIC_NODE_ENV === 'develop',
    },
    // next/image
    images: {
      domains: ['cdn.shopify.com'],
    },
    future: {
      strictPostcssConfiguration: true,
    },
    reactStrictMode: true,
    async headers() {
      return [
        {
          source: '/',
          headers: securityHeaders,
        },
        {
          source: '/:path*',
          headers: securityHeaders,
        },
      ]
    },
  })
)

const ContentSecurityPolicy = `
  default-src 'self';
  script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' https://unpkg.com/pwacompat https://www.googletagmanager.com https://ssl.google-analytics.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.instagram.com *.shopify.com;
  worker-src 'self' 'unsafe-eval' 'unsafe-inline';
  child-src *.youtube.com *.google.com *.twitter.com *.instagram.com *.shopify.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]
