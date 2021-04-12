import Link from 'next/link'
import { FC } from 'react'
import { ContentWrapper } from 'components/layouts'
import { DarkMode } from 'components/ui'
import { useRecoilQuantity, useRecoilFocusItem } from 'lib/hooks/state'
import { Config } from 'lib/site.config'
import s from './SiteHeader.module.css'

export const SiteHeader: FC = () => {
  const { getQuantityState } = useRecoilQuantity()
  const quantityState = getQuantityState()
  const { setFocusItemState } = useRecoilFocusItem()

  return (
    <header className={s.siteHeader}>
      <ContentWrapper>
        <div className="flex justify-between">
          <Link href="/" passHref>
            <button
              aria-label="このサイトの名前"
              onClick={() => setFocusItemState(null)}
            >
              {Config.brandName}
            </button>
          </Link>
          <div className="flex">
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
