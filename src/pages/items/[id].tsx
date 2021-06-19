/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { ItemDetail, ItemImage } from 'components/items'
import { ContentWrapper, PageSEO } from 'components/layouts'
import { Head, Toast } from 'components/ui'
import { getDetail } from 'lib/helper/items'
import { useInitializeCart, useFetchCart } from 'lib/hooks/cart'
import { shopify } from 'lib/shopify'
import { GetDetail } from 'lib/Type'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  try {
    const id = params?.id
    if (!id) throw new Error('idが取得できません')
    const product = await shopify.product.fetch(id as string)
    const detail = getDetail(product as GetDetail)

    return {
      props: { detail: JSON.parse(JSON.stringify(detail)) },
      revalidate: 200,
    }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

export default function DetailPage({
  detail,
  errors,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const placeholderImg = '/product-img-placeholder.svg'
  const router = useRouter()
  useInitializeCart()
  useFetchCart()

  if (errors) return <div>error</div>
  if (router.isFallback) {
    return <div>loading...</div>
  }
  return (
    <>
      <PageSEO
        title={detail.title}
        path={`/items/${encodeURIComponent(detail.id)}`}
        description={detail.description}
        ogImageUrl={detail.images[0] || placeholderImg}
      />
      <div className="pt-2">
        <ContentWrapper>
          <Toast />
          <Head id={'head'} head={detail.title} />
          <div className="flex flex-wrap justify-between">
            <ItemImage detail={detail} />
            <ItemDetail detail={detail} />
          </div>
        </ContentWrapper>
      </div>
    </>
  )
}
