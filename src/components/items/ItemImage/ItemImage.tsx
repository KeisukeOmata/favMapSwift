import Image from 'next/image'
import { FC } from 'react'
import { Slider } from 'components/ui'
import { Detail } from 'lib/Type'
import s from './ItemImage.module.css'

type Props = {
  detail: Detail
}

export const ItemImage: FC<Props> = ({ detail }) => {
  const placeholderImg = '/product-img-placeholder.svg'

  return (
    <>
      <div className={s.item}>
        <div>
          <Slider>
            {detail.images.map((image, i) => (
              <div key={image || i}>
                <Image
                  src={image || placeholderImg}
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
    </>
  )
}
