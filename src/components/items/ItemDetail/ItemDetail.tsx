import Image from 'next/image'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import { ColorAndSize } from 'components/items'
import { Button, Slider, Toast } from 'components/ui'
import { TypeItem, Sku } from 'lib/Type'
import { useAddItem } from 'lib/hooks/cart'

type Props = {
  detail: TypeItem
}

export const ItemDetail: FC<Props> = ({ detail }) => {
  const [itemIdState, setItemIdState] = useState<string | null>(null)
  const [availableState, setAvailableState] = useState<boolean>(true)
  const { AddItem } = useAddItem()
  const AddToCart = (itemIdState: string | number) => {
    AddItem(itemIdState)
    // Show toast
    toast('BAGに追加しました')
  }

  return (
    <>
      <Toast />
      <div className="under-line flex py-1.5">
        <h2 id="heading" tabIndex={-1}>
          {detail.title}
        </h2>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="w-1/2 mt-5 flex flex-col sm:w-full">
          <div>
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
        <div className="w-1/2 mt-5 flex flex-col sm:w-full">
          <p>{detail.vendor}</p>
          <p>{detail.title}</p>
          <p>{detail.variants[0].price}円</p>
          <br />
          <ColorAndSize
            detail={detail}
            variants={detail.variants as Sku[]}
            setItemIdState={setItemIdState}
            setAvailableState={setAvailableState}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: `${detail.descriptionHtml}`,
            }}
          />
          {availableState ? (
            <Button
              className="mt-5"
              shape="square"
              type="button"
              aria-label="BAGに入れる"
              onClick={() => AddToCart(itemIdState as string)}
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
}
