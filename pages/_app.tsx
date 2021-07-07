import { Context, SiteHeader, SiteFooter, Maintenance } from 'components/layouts'
import { useFocusHead } from 'lib/hooks/useFocusHead'
import { Config } from 'lib/site.config'
import { NextSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import NextHead from 'next/head'
import { RecoilRoot } from 'recoil'
import 'styles/main.css'
import 'keen-slider/keen-slider.min.css'

export const reportWebVital = (metric: NextWebVitalsMetric): void => {
  process.env.NEXT_PUBLIC_NODE_ENV === 'production' && console.log(metric)
}

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useFocusHead()
  return (
    <>
      <NextSeo {...Config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" key="site-manifest" />
        <script async src="https://unpkg.com/pwacompat" crossOrigin="anonymous"></script>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
        <link rel="mask-icon" href="/images/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/images/icons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </NextHead>
      <ThemeProvider>
        <RecoilRoot>
          <Context>
            <SiteHeader />
            <main aria-label="メイン">
              {process.env.NEXT_PUBLIC_MAINTENANCE_MODE === '1' ? <Maintenance /> : <Component {...pageProps} />}
            </main>
            <SiteFooter />
          </Context>
        </RecoilRoot>
      </ThemeProvider>
    </>
  )
}
