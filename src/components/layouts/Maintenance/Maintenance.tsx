import { FC } from 'react'
import { ContentWrapper } from 'components/layouts'
import { Button } from 'components/ui'
import { Config } from 'lib/site.config'

export const Maintenance: FC = () => (
  <>
    <div className="text-center py-12">
      <ContentWrapper>
        <p className="leading-tight font-bold text-8xl">メンテナンス中</p>
        <h1 className="pb-12">詳細はTwitterをご確認ください。</h1>
        <a
          href={Config.siteURL.twitter}
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}
        >
          <Button
            aria-label="ツイッターへのリンク"
            shape="square"
            type="button"
          >
            Twitterへ
          </Button>
        </a>
      </ContentWrapper>
    </div>
  </>
)
