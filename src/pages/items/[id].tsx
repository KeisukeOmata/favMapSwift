/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { ItemDetail } from 'components/items'
import { ContentWrapper, PageSEO } from 'components/layouts'
import { shopify } from 'lib/shopify'
import { useInitializeCart } from 'lib/hooks/cart'
import { Detail, Variant, GetVariant, GetDescriptionHtml } from 'lib/Type'

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

    const getVariants = (productVariants: GetVariant[]): Variant[] => {
      const variants = productVariants
        .map((variant) => {
          const color = variant.selectedOptions.find(
            (option) => option.name === 'Color'
          )?.value
          const size = variant.selectedOptions.find(
            (option) => option.name === 'Size'
          )?.value

          if (!color || !size) {
            return undefined
          }

          const newVariant: Variant = {
            id: variant.id as string,
            available: variant.available,
            color: color,
            size: size,
          }
          return newVariant
        })
        .filter((variant) => variant !== undefined) as Variant[]
      return variants
    }

    const getDescriptionHtml = (product: GetDescriptionHtml): string => {
      return product.descriptionHtml
    }

    const detail: Detail = {
      title: product.title,
      images: product.images.map((image) => image.src),
      vendor: product.vendor,
      price: product.variants[0].price,
      descriptionHtml: getDescriptionHtml(product as GetDescriptionHtml),
      variants: getVariants(product.variants as GetVariant[]),
    }

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
  useInitializeCart()
  const router = useRouter()
  const placeholderImg = '/product-img-placeholder.svg'

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
          <ItemDetail detail={detail} />
        </ContentWrapper>
      </div>
    </>
  )
}
