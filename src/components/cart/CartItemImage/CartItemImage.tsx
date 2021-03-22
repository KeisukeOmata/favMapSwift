import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Sku } from 'lib/Type'
// import s from './CartItemImage.module.scss'

type Props = {
  cartItem: {
    title: string
    variant: Sku
    quantity: number
    id: string
  }
}

export const CartItemImage: FC<Props> = ({ cartItem }) => {
  return (
    <>
      <Link href={`/items/${cartItem.variant.product.id}`}>
        <button aria-label={`${cartItem.title}のページを表示する`}>
          <Image
            src={cartItem.variant.image.src}
            alt={cartItem.variant.image.altText || 'Item Image'}
            width={500}
            height={500}
            quality="85"
          />
        </button>
      </Link>
    </>
  )
}
