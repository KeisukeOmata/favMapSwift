import { ContentWrapper } from 'components/layouts'
import { Button } from 'components/ui'
import { Config } from 'lib/site.config'
import { FC } from 'react'

export const Maintenance: FC = () => (
  <>
    <div className="py-12 text-center">
      <ContentWrapper>
        <p className="text-8xl font-bold leading-tight">メンテナンス中</p>
        <h1 className="pb-12">詳細はTwitterをご確認ください。</h1>
        <a href={Config.siteURL.twitter} target="_blank" rel="noreferrer" tabIndex={-1}>
          <Button aria-label="ツイッターへのリンク" shape="square" type="button">
            Twitterへ
          </Button>
        </a>
      </ContentWrapper>
    </div>
  </>
)
