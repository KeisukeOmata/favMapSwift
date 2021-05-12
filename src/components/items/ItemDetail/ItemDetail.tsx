import Image from 'next/image'
import { FC, memo, useCallback } from 'react'
import { toast } from 'react-toastify'
import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
import { ColorAndSize } from 'components/items'
import { Button, Slider, Toast } from 'components/ui'
import { TypeItem, Sku } from 'lib/Type'
import { useAddItem } from 'lib/hooks/cart'
import { useAvailable, useId, useLoading } from 'lib/hooks/state'
import s from './ItemDetail.module.css'
dayjs.locale(ja)

type Props = {
  detail: TypeItem
}

export const ItemDetail: FC<Props> = memo(({ detail }) => {
  const { available, setAvailable } = useAvailable()
  const { id, setId } = useId()
  const { loading, setLoading } = useLoading()
  const { AddItem } = useAddItem()
  const placeholderImg = '/product-img-placeholder.svg'

  const handleAddItem = useCallback(
    async (itemIdState: string | number): Promise<void> => {
      setLoading(true)
      const nowTime = dayjs().toDate().toString()
      try {
        await AddItem(itemIdState, nowTime)
        // Show toast
        toast('BAGに追加しました')
        setLoading(false)
      } catch (err) {
        setLoading(false)
      }
    },
    [AddItem, setLoading]
  )

  return (
    <>
      <Toast />
      <div className="under-line flex py-1.5">
        <h2 id="heading" tabIndex={-1}>
          {detail.title}
        </h2>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className={s.item}>
          <div>
            <Slider>
              {detail.images.map((image, i) => (
                <div key={image?.src || i}>
                  <Image
                    src={image?.src || placeholderImg}
                    alt={detail.title || 'Item Image'}
                    width={500}
                    height={500}
                    priority={i === 0}
                    quality="85"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className={s.item}>
          <p>{detail.vendor}</p>
          <p>{detail.title}</p>
          <p>{detail.variants[0].price}円</p>
          <br />
          <ColorAndSize
            detail={detail}
            variants={detail.variants as Sku[]}
            setItemIdState={setId}
            setAvailableState={setAvailable}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: `${detail.descriptionHtml}`,
            }}
          />
          {available ? (
            <Button
              className="mt-5"
              shape="square"
              type="button"
              aria-label="BAGに入れる"
              loading={loading}
              onClick={() => handleAddItem(id as string)}
            >
              BAGに入れる
            </Button>
          ) : (
            <Button
              className="mt-5"
              shape="square"
              type="button"
              aria-label="この組み合わせは売り切れです"
            >
              この組み合わせは売り切れです
            </Button>
          )}
        </div>
      </div>
    </>
  )
})

ItemDetail.displayName = 'ItemDetail'
