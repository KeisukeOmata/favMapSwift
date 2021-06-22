/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PageSEO, ContentWrapper } from 'components/layouts'
import { Categories, ItemsByCategory } from 'components/root'
import { Head } from 'components/ui'
import { GetItem } from 'lib/Type'
import { getItems } from 'lib/helper/root'
import { useFetchCart, useInitializeCart } from 'lib/hooks/cart'
import { shopify } from 'lib/shopify'
import { Config } from 'lib/site.config'
import { InferGetStaticPropsType } from 'next'

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

export default function Home({ items }: InferGetStaticPropsType<typeof getStaticProps>) {
  useFetchCart()
  useInitializeCart()

  return (
    <>
      <PageSEO title={Config.title} path="/" description={Config.description} ogImageUrl={Config.defaultOGImage} />
      <div className="pt-2">
        <ContentWrapper>
          <Head id={'head'} head={'Items'} option={'Scroll→'} optionClassName={'justify-between'} />
          <Categories />
          <ItemsByCategory items={items} />
        </ContentWrapper>
      </div>
    </>
  )
}
