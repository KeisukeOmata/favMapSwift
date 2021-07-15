import { gooleAnalyticsId } from 'lib/gtag'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          {gooleAnalyticsId && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${gooleAnalyticsId}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gooleAnalyticsId}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
