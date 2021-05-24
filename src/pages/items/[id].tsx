/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { toast } from 'react-toastify'
import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
dayjs.locale(ja)
import { ContentWrapper, PageSEO } from 'components/layouts'
import { ItemDetail, ItemImage } from 'components/items'
import { Toast } from 'components/ui'
import { shopify } from 'lib/shopify'
import { useAvailable, useId, useLoading, useMounted } from 'lib/hooks/state'
import { useInitializeCart, useFetchCart, useAddItem } from 'lib/hooks/cart'
import { useGetColorAndSize } from 'lib/hooks/useGetColorAndSize'
import { Detail, Variant, GetVariant, GetDescriptionHtml } from 'lib/Type'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  try {
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
  const { availableState, setAvailableState } = useAvailable()
  const { idState, setIdState } = useId()
  const { colors, colorState, sizes, sizeState, setColorState, setSizeState } =
    useGetColorAndSize(detail, setAvailableState, setIdState)
  const { loadingState, setLoadingState } = useLoading()
  const { mountedState, setMountedState } = useMounted()
  const router = useRouter()
  const { theme } = useTheme()
  useInitializeCart()
  useFetchCart()

  const handleAddItem = async (itemIdState: string | null): Promise<void> => {
    if (!itemIdState) return
    setLoadingState(true)
    const nowTime = dayjs().toDate().toString()
    try {
      await AddItem(itemIdState, nowTime)
      // Show toast
      toast('BAGに追加しました')
      setLoadingState(false)
    } catch (err) {
      setLoadingState(false)
    }
  }

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
          <Toast theme={theme} />
          <div className="under-line flex py-1.5">
            <h2 id="head" tabIndex={-1}>
              {detail.title}
            </h2>
          </div>
          <div className="flex justify-between flex-wrap">
            <ItemImage detail={detail} />
            <ItemDetail
              detail={detail}
              availableState={availableState}
              colors={colors}
              colorState={colorState}
              idState={idState}
              loadingState={loadingState}
              mountedState={mountedState}
              sizes={sizes}
              sizeState={sizeState}
              theme={theme}
              handleAddItem={handleAddItem}
              setColorState={setColorState}
              setMountedState={setMountedState}
              setSizeState={setSizeState}
            />
          </div>
        </ContentWrapper>
      </div>
    </>
  )
}
