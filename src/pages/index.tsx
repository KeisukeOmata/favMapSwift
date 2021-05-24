/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { InferGetStaticPropsType } from 'next'
import { PageSEO, ContentWrapper } from 'components/layouts'
import { ScrollableCategories, ItemsByCategory } from 'components/root'
import {
  useCount,
  useRecoilCategory,
  useRecoilFocusItem,
} from 'lib/hooks/state'
import { useInitializeCart, useFetchCart } from 'lib/hooks/cart'
import { shopify } from 'lib/shopify'
import { Config } from 'lib/site.config'
import { ItemType, GetItem } from 'lib/Type'

export async function getStaticProps() {
  const getItems = (products: GetItem[]): ItemType[] => {
    const items = products.map((product) => {
      const newItem: ItemType = {
        id: product.id as string,
        images: product.images.map((image) => image.src),
        price: product.variants[0].price,
        productType: product.productType,
        title: product.title,
      }
      return newItem
    })
    return items
  }

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
  const { countState, setCountState } = useCount()
  const { getCategoryState, setCategoryState } = useRecoilCategory()
  const categoryState = getCategoryState()
  const { getFocusItemState, setFocusItemState } = useRecoilFocusItem()
  const focusItemState = getFocusItemState()
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
          <div className="under-line flex py-1.5 justify-between">
            <h2 id="head" tabIndex={-1}>
              Items
            </h2>
            <h2>Scroll→</h2>
          </div>
          <ScrollableCategories
            categoryState={categoryState}
            setCategoryState={setCategoryState}
          />
          <ItemsByCategory
            items={items}
            categoryState={categoryState}
            countState={countState}
            focusItemState={focusItemState}
            setCountState={setCountState}
            setFocusItemState={setFocusItemState}
          />
        </ContentWrapper>
      </div>
    </>
  )
}
