/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { WorldDescription } from 'components/world'
import { PageSEO, ContentWrapper } from 'components/layouts'
import { Config } from 'lib/site.config'

export default function World() {
  return (
    <>
      <PageSEO title="World" path="/world" ogImageUrl={Config.defaultOGImage} />
      <div className="pt-2">
        <ContentWrapper>
          <div className="under-line flex py-1.5">
            <h2 id="heading" tabIndex={-1}>
              World
            </h2>
          </div>
          <WorldDescription />
        </ContentWrapper>
      </div>
    </>
  )
}
