import Link from 'next/link'
import { FC } from 'react'
import { useTheme } from 'next-themes'
import { ContentWrapper, CartLink } from 'components/layouts'
import { DarkMode } from 'components/ui'
import { Config } from 'lib/site.config'
import {
  useMounted,
  useRecoilFocusItem,
  useRecoilQuantity,
} from 'lib/hooks/state'
import s from './SiteHeader.module.css'

export const SiteHeader: FC = () => {
  const { mountedState, setMountedState } = useMounted()
  const { setFocusItemState } = useRecoilFocusItem()
  const { getQuantityState } = useRecoilQuantity()
  const quantityState = getQuantityState()
  const { theme, setTheme } = useTheme()

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
            <DarkMode
              mountedState={mountedState}
              theme={theme}
              setMountedState={setMountedState}
              setTheme={setTheme}
            />
          </div>
          <CartLink
            quantityState={quantityState}
            setFocusItemState={setFocusItemState}
          />
        </div>
      </ContentWrapper>
    </header>
  )
}
