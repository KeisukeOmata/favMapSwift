import { ContentWrapper, CartLink } from 'components/layouts'
import { DarkMode } from 'components/ui'
import { useRecoilFocusItem } from 'lib/hooks/state'
import { Config } from 'lib/site.config'
import Link from 'next/link'
import { FC } from 'react'

export const SiteHeader: FC = () => {
  const { setFocusItemState } = useRecoilFocusItem()

  return (
    <header className="sticky top-0 z-50 py-5 bg-opacity-30 backdrop-filter backdrop-blur-lg">
      <ContentWrapper>
        <div className="flex justify-between">
          <Link href="/" passHref>
            <button aria-label="このサイトの名前" onClick={() => setFocusItemState(null)}>
              {Config.brandName}
            </button>
          </Link>
          <div className="flex">
            <Link href={'/'} passHref>
              <button aria-label="アイテム一覧を表示する" onClick={() => setFocusItemState(null)}>
                Items
              </button>
            </Link>
            <div className="px-2">/</div>
            <Link href={'/about'} passHref>
              <button aria-label="about usを表示する">About</button>
            </Link>
            <div className="px-2">/</div>
            <DarkMode />
          </div>
          <CartLink />
        </div>
      </ContentWrapper>
    </header>
  )
}
