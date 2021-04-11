/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { InferGetStaticPropsType } from 'next'
import { PageSEO, ContentWrapper } from 'components/layouts'
import { ScrollableCategories, ItemsByCategory } from 'components/root'
import { useFetchCart, useInitializeCart } from 'lib/hooks/cart'
import { shopify } from 'lib/shopify'
import { Config } from 'lib/site.config'

export async function getStaticProps() {
  const items = await shopify.product.fetchAll()
  return {
    props: {
      items: JSON.parse(JSON.stringify(items)),
    },
    revalidate: 14400,
  }
}

export default function Home({
  items,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useInitializeCart()
  useFetchCart()
  return (
    <>
      <PageSEO
        title={Config.title}
        path="/"
        description={Config.description}
        ogImageUrl={Config.defaultOGImage}
      />
      <div className="pt-2">
        <ContentWrapper>
          <div className="under-line flex py-1.5 justify-between">
            <h2 id="heading" tabIndex={-1}>
              Items
            </h2>
            <h2>Scroll→</h2>
          </div>
          <div className="pt-4">
            <ScrollableCategories />
          </div>
          <ItemsByCategory items={items} />
        </ContentWrapper>
      </div>
    </>
  )
}
