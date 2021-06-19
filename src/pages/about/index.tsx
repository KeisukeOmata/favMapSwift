/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Description } from 'components/about'
import { PageSEO, ContentWrapper } from 'components/layouts'
import { Head } from 'components/ui'
import { Config } from 'lib/site.config'
import { useFetchCart } from 'lib/hooks/cart'

export default function About() {
  useFetchCart()
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
