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
  const { id, images, title, variants } = item
  const ref = useRef<HTMLButtonElement | null>(null)
  const { setFocusItemState } = useRecoilFocusItem()

  useEffect(() => {
    if (ref.current && focused) {
      ref.current.focus()
    }
  }, [])

  return (
    <>
      <div className="w-1/2 mt-5 p-4 sm:w-full">
        <Link key={`items-${id}`} href={`/items/${id}`} passHref>
          <button
            ref={ref}
            onClick={() => setFocusItemState(id)}
            aria-label={`${title}のページを表示する`}
          >
            <Image
              src={images[0].src}
              alt={title || 'Item Image'}
              width={500}
              height={500}
              quality="85"
            />
            <div className="text-left">
              <p>{title}</p>
              <p>¥{variants[0].price}</p>
            </div>
          </button>
        </Link>
      </div>
    </>
  )
}
