/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { InferGetStaticPropsType } from 'next'
import { PageSEO, ContentWrapper } from 'components/layouts'
import { ScrollableCategories, ItemsByCategory } from 'components/root'
import { useInitializeCart } from 'lib/hooks/cart'
import { shopify } from 'lib/shopify'
import { Config } from 'lib/site.config'
import { ItemType, GetItem } from 'lib/Type'

export async function getStaticProps() {
  const products = await shopify.product.fetchAll()

  const getItems = (products: GetItem[]): ItemType[] => {
    const items = products.map((product) => {
      const newItem: ItemType = {
        id: product.id as string,
        images: product.images.map((image) => image.src),
        title: product.title,
        price: product.variants[0].price,
        productType: product.productType,
      }
      return newItem
    })
    return items
  }

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
          <div className="under-line flex py-1.5 justify-between">
            <h2 id="heading" tabIndex={-1}>
              Items
            </h2>
            <h2>Scroll→</h2>
          </div>
          <ScrollableCategories />
          <ItemsByCategory items={items} />
        </ContentWrapper>
      </div>
    </>
  )
}
