import Link from 'next/link'
import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'
import { TypeItem } from 'lib/Type'
import { useRecoilFocusItem } from 'lib/hooks/state'

type Props = {
  item: TypeItem
  focused: boolean
}

export const Item: FC<Props> = ({ item, focused }) => {
  const ref = useRef<HTMLButtonElement | null>(null)
  const { setFocusItemState } = useRecoilFocusItem()
  const placeholderImg = '/product-img-placeholder.svg'

  useEffect(() => {
    if (ref.current && focused) {
      ref.current.focus()
    }
  }, [focused])

  return (
    <>
      <div className="w-1/2 p-4 sm:w-full">
        <Link key={`items-${item.id}`} href={`/items/${item.id}`} passHref>
          <button
            ref={ref}
            onClick={() => setFocusItemState(item.id)}
            aria-label={`${item.title}のページを表示する`}
          >
            <Image
              src={item.images[0]?.src || placeholderImg}
              alt={item.title || 'Item Image'}
              width={500}
              height={500}
              quality="85"
            />
            <div className="text-left">
              <p>{item.title}</p>
              <p>{item.variants[0].price}円</p>
            </div>
          </button>
        </Link>
      </div>
    </>
  )
}
