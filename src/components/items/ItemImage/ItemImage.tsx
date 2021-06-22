import { Slider } from 'components/ui'
import { Detail } from 'lib/Type'
import Image from 'next/image'
import { FC } from 'react'

type Props = {
  detail: Detail
}

export const ItemImage: FC<Props> = ({ detail }) => {
  const placeholderImg = '/product-img-placeholder.svg'

  return (
    <>
      <div className="flex flex-col pt-5 w-1/2 sm:w-full">
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
                  blurDataURL={image || placeholderImg}
                  placeholder="blur"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}
