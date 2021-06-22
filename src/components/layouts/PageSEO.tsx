import { Config } from 'lib/site.config'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

type Props = {
  title: string
  path?: string
  description?: string
  ogImageUrl?: string
}

export const PageSEO: FC<Props> = ({ path, title, description, ogImageUrl }) => {
  const pageUrl = `${Config.siteRoot}${path || ''}`
  const placeholderImg = '/product-img-placeholder.svg'
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={pageUrl}
      openGraph={{
        type: 'website',
        title: title,
        description: description,
        images: [
          {
            url: ogImageUrl || placeholderImg,
            width: 500,
            height: 500,
            alt: title,
          },
        ],
      }}
    />
  )
}
