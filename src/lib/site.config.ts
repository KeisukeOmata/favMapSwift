export const Config = {
  title: process.env.NEXT_PUBLIC_TITLE as string,
  titleTemplate: process.env.NEXT_PUBLIC_TITLETEMPLATE,
  description: process.env.NEXT_PUBLIC_DESCRIPTION as string,
  canonical:
    process.env.NEXT_PUBLIC_NODE_ENV === 'production'
      ? (process.env.NEXT_PUBLIC_URL as string)
      : 'http://localhost:3000',
  copyright: process.env.NEXT_PUBLIC_COPYRIGHT,
  openGraph: {
    type: 'website',
    locale: 'ja',
    url:
      process.env.NEXT_PUBLIC_NODE_ENV === 'production'
        ? (process.env.NEXT_PUBLIC_URL as string)
        : 'http://localhost:3000',
    site_name: process.env.NEXT_PUBLIC_TITLE as string,
    images: [
      {
        url: process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_PATH as string,
        width: 500,
        height: 500,
        alt: 'Brand logo.',
      },
    ],
  },
  twitter: {
    handle: process.env.NEXT_PUBLIC_TWITTER_ACCOUNT as string,
    site: process.env.NEXT_PUBLIC_TWITTER_ACCOUNT as string,
    cardType: 'summary_large_image',
  },
  siteRoot:
    process.env.NEXT_PUBLIC_NODE_ENV === 'production'
      ? (process.env.NEXT_PUBLIC_URL as string)
      : 'http://localhost:3000',
  defaultOGImage:
    process.env.NEXT_PUBLIC_NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_OGIMAGE_PATH
      : 'http://localhost:3000/brand1.jpg',
  siteURL: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    github: process.env.NEXT_PUBLIC_GITHUB_URL,
  },
  brandName: process.env.NEXT_PUBLIC_BRANDNAME,
  description1: process.env.NEXT_PUBLIC_DESCRIPTION1,
  description2: process.env.NEXT_PUBLIC_DESCRIPTION2,
  description3: process.env.NEXT_PUBLIC_DESCRIPTION3,
  name: process.env.NEXT_PUBLIC_NAME,
  emailAddress: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
  responsibleParty: process.env.NEXT_PUBLIC_RESPONSIBLE_PARTY,
}
