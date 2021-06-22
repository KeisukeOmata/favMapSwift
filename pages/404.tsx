import { ContentWrapper, PageSEO } from 'components/layouts'
import { Button } from 'components/ui'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Custom404() {
  return (
    <>
      <PageSEO title="404 not found" />
      <div className="py-12 text-center">
        <ContentWrapper>
          <p className="text-9xl font-bold leading-tight">404</p>
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
