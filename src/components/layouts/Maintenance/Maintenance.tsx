import { FC } from 'react'
import { ContentWrapper, PageSEO } from 'components/layouts'
import { Button } from 'components/ui'
import { Config } from 'lib/site.config'
import s from './Maintenance.module.css'

export const Maintenance: FC = () => {
  return (
    <>
      <PageSEO title="メンテナンス中" />
      <div className={s.error}>
        <ContentWrapper>
          <p className={s.error__status}>メンテナンス中</p>
          <h1 className={s.error__message}>詳細はTwitterをご確認ください。</h1>
          <nav className={s.error__actions}>
            <a
              href={Config.siteURL.twitter}
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
            >
              <Button
                shape="square"
                type="button"
                aria-label="ツイッターへのリンク"
              >
                Twitterへ
              </Button>
            </a>
          </nav>
        </ContentWrapper>
      </div>
    </>
  )
}
