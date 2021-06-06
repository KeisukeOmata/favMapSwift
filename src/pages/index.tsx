/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { InferGetStaticPropsType } from 'next'
import { PageSEO, ContentWrapper } from 'components/layouts'
import { Categories, ItemsByCategory } from 'components/root'
import { getItems } from 'lib/helper/root'
import { useInitializeCart, useFetchCart } from 'lib/hooks/cart'
import { shopify } from 'lib/shopify'
import { Config } from 'lib/site.config'
import { GetItem } from 'lib/Type'

export async function getStaticProps() {
  const products = await shopify.product.fetchAll()
  const items = getItems(products as GetItem[])

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
  useFetchCart()
  useInitializeCart()

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
          <div className="flex justify-between py-1.5 under-line">
            <h2 id="head" tabIndex={-1}>
              Items
            </h2>
            <h2>Scroll→</h2>
          </div>
          <Categories />
          <ItemsByCategory items={items} />
        </ContentWrapper>
      </div>
    </>
  )
}
