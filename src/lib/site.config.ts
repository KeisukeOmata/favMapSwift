export const Config = {
  title: 'e-commerce',
  titleTemplate: '%s - e-commerce Storefront',
  description: 'e-commerce using ISR(Incremental Static Regeneration).',
  canonical:
    process.env.NODE_ENV === 'production'
      ? 'https://e-commerce.keisukeomata.vercel.app'
      : 'http://localhost:3000',
  copyright: 'Keisuke Omata',
  openGraph: {
    type: 'website',
    locale: 'ja',
    url:
      process.env.NODE_ENV === 'production'
        ? 'https://e-commerce.keisukeomata.vercel.app'
        : 'http://localhost:3000',
    site_name: 'e-commerce',
    images: [
      {
        url: '/brand1.webp',
        width: 500,
        height: 500,
        alt: 'Brand logo.',
      },
    ],
  },
  twitter: {
    handle: '@mete0la',
    site: '@mete0la',
    cardType: 'summary_large_image',
  },
  siteRoot:
    process.env.NODE_ENV === 'production'
      ? 'https://e-commerce.keisukeomata.vercel.app'
      : 'http://localhost:3000',
  defaultOGImage:
    process.env.NODE_ENV === 'production'
      ? 'https://e-commerce.keisukeomata.vercel.app/brand1.webp'
      : 'http://localhost:3000/brand1.webp',
  siteURL: {
    twitter: 'https://twitter.com/mete0la',
    instagram: 'https://twitter.com/mete0la',
    github: 'https://github.com/KeisukeOmata/next_e-commerce',
  },
  brandName: 'SKPISM',
  description1:
    'あらゆるものに縛られ、抑圧される社会と一線を画し、自分自身を取り戻すための服。<br>その人自身のアイデンティティからなる白昼夢のように、持つ人の個性に合わせて表情が変化するアイテムを展開。',
  description2:
    '国内外から厳選されたヴィンテージアイテムと、再構築され新たなアイテムとして生まれ変わった一点物を取り扱うVintage Select Bland',
  description3:
    '10年後も美しいBAGを目指して使い込むほどに艶を増す上質な本革を使用。<br>MADE IN JAPANにこだわり、優れた職人によって作られたシンプルで長く寄り添う小物を展開。',
  name: '小俣圭佑',
  emailAddress: 'omatakeisuke.work@gmail.com',
  responsibleParty: '小俣圭佑',
}
