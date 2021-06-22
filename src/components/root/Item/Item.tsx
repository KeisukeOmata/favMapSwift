import { ItemType } from 'lib/Type'
import { useRecoilFocusItem } from 'lib/hooks/state'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useRef } from 'react'

type Props = {
  item: ItemType
  focused: boolean
}

export const Item: FC<Props> = ({ item, focused }) => {
  const placeholderImg = '/product-img-placeholder.svg'
  const { setFocusItemState } = useRecoilFocusItem()
  const ref = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (ref.current && focused) {
      ref.current.focus()
    }
  }, [focused])

  return (
    <>
      <div className="p-4 w-1/2 sm:w-full">
        <Link key={`items-${item.id}`} href={`/items/${item.id}`} passHref>
          <button aria-label={`${item.title}のページを表示する`} ref={ref} onClick={() => setFocusItemState(item.id)}>
            <Image
              src={item.images[0] || placeholderImg}
              alt={item.title || 'Item Image'}
              width={500}
              height={500}
              quality="85"
              blurDataURL={item.images[0] || placeholderImg}
              placeholder="blur"
            />
            <div className="text-left">
              <p>{item.title}</p>
              <p>{item.price}円</p>
            </div>
          </button>
        </Link>
      </div>
    </>
  )
}
