import Link from 'next/link'
import { FC } from 'react'
import { ContentWrapper } from 'components/layouts'
import { DarkMode } from 'components/ui'
import { useRecoilQuantity } from 'lib/hooks/state/useRecoilQuantity'
import { useRecoilFocusItem } from 'lib/hooks/useRecoilFocusItem'
import s from './SiteHeader.module.scss'

export const SiteHeader: FC = () => {
  const { getQuantityState } = useRecoilQuantity()
  const quantityState = getQuantityState()
  const { setFocusItemState } = useRecoilFocusItem()

  return (
    <header className={s.siteHeader}>
      <ContentWrapper>
        <div className={s.siteHeader__inner}>
          <Link href="/" passHref>
            <button
              aria-label="このサイトの名前"
              className={s.siteHeader__logoLink}
              onClick={() => setFocusItemState(null)}
            >
              Brand
            </button>
          </Link>
          <div className={s.siteHeader__links}>
            <Link href={'/'} passHref>
              <button
                aria-label="アイテム一覧を表示する"
                onClick={() => setFocusItemState(null)}
              >
                Items
              </button>
            </Link>
            <div className={s.slash}>/</div>
            <Link href={'/world'} passHref>
              <button
                aria-label="about usを表示する"
                onClick={() => setFocusItemState(null)}
              >
                World
              </button>
            </Link>
            <div className={s.slash}>/</div>
            <DarkMode />
          </div>
          <Link href={'/cart'} passHref>
            <button
              aria-label="カートを表示する"
              onClick={() => setFocusItemState(null)}
            >
              BAG({quantityState})
            </button>
          </Link>
        </div>
      </ContentWrapper>
    </header>
  )
}
