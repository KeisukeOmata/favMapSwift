/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
dayjs.locale(ja)
import { toast } from 'react-toastify'
import { ItemDetail, ItemImage } from 'components/items'
import { ContentWrapper, PageSEO } from 'components/layouts'
import { Toast } from 'components/ui'
import { useInitializeCart, useFetchCart, useAddItem } from 'lib/hooks/cart'
import { useLoading } from 'lib/hooks/state'
import { shopify } from 'lib/shopify'
import { Detail, Variant, GetVariant, GetDescriptionHtml } from 'lib/Type'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
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

  try {
    const id = params?.id
    if (!id) throw new Error('idが取得できません')
    const product = await shopify.product.fetch(id as string)
    const detail: Detail = {
      descriptionHtml: getDescriptionHtml(product as GetDescriptionHtml),
      images: product.images.map((image) => image.src),
      price: product.variants[0].price,
      title: product.title,
      variants: getVariants(product.variants as GetVariant[]),
      vendor: product.vendor,
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
  const placeholderImg = '/product-img-placeholder.svg'
  const { AddItem } = useAddItem()
  const { loadingState, setLoadingState } = useLoading()
  const router = useRouter()
  useInitializeCart()
  useFetchCart()

  const handleAddItem = useCallback(
    async (variantIdState: string | null): Promise<void> => {
      if (!variantIdState) return
      setLoadingState(true)
      const nowTime = dayjs().toDate().toString()
      try {
        await AddItem(variantIdState, nowTime)
        // Show toast
        toast('BAGに追加しました')
        setLoadingState(false)
      } catch (err) {
        setLoadingState(false)
      }
    },
    [AddItem, setLoadingState]
  )

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
          <div className="flex py-1.5 under-line">
            <h2 id="head" tabIndex={-1}>
              {detail.title}
            </h2>
          </div>
          <div className="flex flex-wrap justify-between">
            <ItemImage detail={detail} />
            <ItemDetail
              detail={detail}
              loadingState={loadingState}
              handleAddItem={handleAddItem}
            />
          </div>
        </ContentWrapper>
      </div>
    </>
  )
}
