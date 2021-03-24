import Image from 'next/image'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import { ColorAndSize } from 'components/items'
import { Button, Slider, Toast } from 'components/ui'
import { TypeItem, Sku } from 'lib/Type'
import { useAddItem } from 'lib/hooks/cart'
import s from './ItemDetail.module.scss'

type Props = {
  detail: TypeItem
}

export const ItemDetail: FC<Props> = ({ detail }) => {
  const [itemIdState, setItemIdState] = useState<string | null>(null)
  const AddToCart = (itemIdState: string | number) => {
    useAddItem(itemIdState)
    // Show toast
    toast('BAGに追加しました')
  }

  return (
    <>
      <Toast />
      <div className={s.itemSectionTitleContainer}>
        <h2>{detail.title}</h2>
      </div>
      <div className={s.items}>
        <div className={s.item}>
          <div className={s.item__left}>
            <Slider>
              {detail.images.map((image, i) => (
                <div key={image.src}>
                  <Image
                    src={image.src}
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
          <p>¥{detail.variants[0].price}</p>
          <br />
          <ColorAndSize
            detail={detail}
            variants={detail.variants as Sku[]}
            setItemIdState={setItemIdState}
          />
          <article
            className={s.item__description}
            dangerouslySetInnerHTML={{
              __html: `${detail.descriptionHtml}`,
            }}
          />
          <Button
            shape="square"
            type="button"
            aria-label="BAGに入れる"
            onClick={() => AddToCart(itemIdState as string)}
          >
            BAGに入れる
          </Button>
        </div>
      </div>
    </>
  )
}
