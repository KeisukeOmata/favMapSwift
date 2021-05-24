import Link from 'next/link'
import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'
import { ItemType } from 'lib/Type'

type Props = {
  item: ItemType
  focused: boolean
  setFocusItemState: (focusItemState: string | null) => void
}

export const Item: FC<Props> = ({ item, focused, setFocusItemState }) => {
  const placeholderImg = '/product-img-placeholder.svg'
  const ref = useRef<HTMLButtonElement | null>(null)

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
            aria-label={`${item.title}のページを表示する`}
            ref={ref}
            onClick={() => setFocusItemState(item.id)}
          >
            <Image
              src={item.images[0] || placeholderImg}
              alt={item.title || 'Item Image'}
              width={500}
              height={500}
              quality="85"
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
