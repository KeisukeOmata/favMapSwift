/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Description } from 'components/about'
import { PageSEO, ContentWrapper } from 'components/layouts'
import { Config } from 'lib/site.config'
import { useFetchCart } from 'lib/hooks/cart'

export default function About() {
  useFetchCart()
  return (
    <>
      <PageSEO title="About" path="/about" ogImageUrl={Config.defaultOGImage} />
      <div className="pt-2">
        <ContentWrapper>
          <div className="flex py-1.5 under-line">
            <h2 id="head" tabIndex={-1}>
              About
            </h2>
          </div>
          <Description />
        </ContentWrapper>
      </div>
    </>
  )
}
