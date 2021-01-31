import Link from 'next/link'
import { ContentWrapper } from 'components/layouts/ContentWrapper'
import { PageSEO } from 'components/layouts/PageSEO'
import s from 'styles/pages/404.module.scss'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Custom404() {
  return (
    <>
      <PageSEO title="404 not found" noindex={true} />
      <div className={s.error}>
        <ContentWrapper>
          <p className={s.error__status}>404</p>
          <h1 className={s.error__message}>Page not found...</h1>
          <nav className={s.error__actions}>
            <Link href="/" passHref>
              <button aria-label="Topページに戻る" className={s.button}>
                Topへ
              </button>
            </Link>
          </nav>
        </ContentWrapper>
      </div>
    </>
  )
}
