import { FC, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSetRecoilState } from 'recoil'
import { itemAtom } from './CategoryItems'
import { TypeItem } from '../../types/TypeItem'
import styles from '../../styles/components/items/Items.module.scss'

type Props = {
  item: TypeItem
  focused: boolean
}

const Items: FC<Props> = ({ item, focused }) => {
  const { id, images, title, variants } = item
  const ref = useRef<HTMLButtonElement | null>(null)
  const setItemState = useSetRecoilState(itemAtom)

  useEffect(() => {
    if (ref.current && focused) {
      ref.current.focus()
    }
  }, [focused])

  return (
    <>
      <div className={styles.item}>
        <Link key={`items-${id}`} href={`items/${id}`} passHref>
          <button
            ref={ref}
            tabIndex={-1}
            onClick={() => setItemState(id as string)}
            aria-label={`${title}のページを表示する`}
            className={styles.item__mainLink}
          >
            <Image
              src={images[0].src}
              alt={title || 'Item Image'}
              width={500}
              height={500}
              quality="85"
              // 遅延読み込みしない
              loading={'eager'}
            />
            <div className={styles.item__date}>
              <p>{title}</p>
              <p>¥{variants[0].price}</p>
            </div>
          </button>
        </Link>
      </div>
    </>
  )
}

export default Items
