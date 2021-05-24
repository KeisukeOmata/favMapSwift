import Link from 'next/link'
import { ContentWrapper, PageSEO } from 'components/layouts'
import { Button } from 'components/ui'
import { useFetchCart } from 'lib/hooks/cart'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Custom404() {
  useFetchCart()
  return (
    <>
      <PageSEO title="404 not found" />
      <div className="text-center py-12">
        <ContentWrapper>
          <p className="leading-tight font-bold text-9xl">404</p>
          <h1 className="pb-12">Page not found...</h1>
          <Link href="/" passHref>
            <Button shape="square" type="button" aria-label="Topページに戻る">
              Topへ
            </Button>
          </Link>
        </ContentWrapper>
      </div>
    </>
  )
}
