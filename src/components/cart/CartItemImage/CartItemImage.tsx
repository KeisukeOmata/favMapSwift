import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { LineItem } from 'lib/Type'

type Props = {
  cartItem: LineItem
}

export const CartItemImage: FC<Props> = ({ cartItem }) => {
  const placeholderImg = '/product-img-placeholder.svg'
  return (
    <Link href={`/items/${cartItem.variant.product.id}`} passHref>
      <button aria-label={`${cartItem.title}のページを表示する`}>
        <Image
          src={cartItem.variant.image?.src || placeholderImg}
          alt={cartItem.variant.image?.altText || 'Item Image'}
          width={500}
          height={500}
          quality="85"
        />
      </button>
    </Link>
  )
}
