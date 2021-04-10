import { FC } from 'react'
import { ContentWrapper } from 'components/layouts'
import { Button } from 'components/ui'
import { Config } from 'lib/site.config'

export const Maintenance: FC = () => {
  return (
    <>
      <div className="text-center py-12">
        <ContentWrapper>
          <p className="leading-tight font-bold text-9xl">メンテナンス中</p>
          <h1>詳細はTwitterをご確認ください。</h1>
          <a
            href={Config.siteURL.twitter}
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
          >
            <Button
              className="mt-12"
              shape="square"
              type="button"
              aria-label="ツイッターへのリンク"
            >
              Twitterへ
            </Button>
          </a>
        </ContentWrapper>
      </div>
    </>
  )
}
