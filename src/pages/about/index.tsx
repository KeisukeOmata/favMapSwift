/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Description } from 'components/about'
import { PageSEO, ContentWrapper } from 'components/layouts'
import { Head } from 'components/ui'
import { Config } from 'lib/site.config'

export default function About() {
  return (
    <>
      <PageSEO title="About" path="/about" ogImageUrl={Config.defaultOGImage} />
      <div className="pt-2">
        <ContentWrapper>
          <Head id={'head'} head={'About'} />
          <Description />
        </ContentWrapper>
      </div>
    </>
  )
}
