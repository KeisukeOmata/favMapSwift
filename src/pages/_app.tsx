import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'next-themes'
import { NextSeo } from 'next-seo'
import { SiteHeader, SiteFooter, FixedFooter } from 'components/layouts'
import { Config } from 'lib/site.config'
import { useMainFocus } from 'lib/hooks/useMainFocus'
import 'styles//main.css'
import 'styles/globals.scss'
import 'styles/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useMainFocus()
  // Fix CSS issue from Chrome bug
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <NextSeo {...Config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" key="site-manifest" />
        <script
          async
          src="https://unpkg.com/pwacompat"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/images/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/images/icons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </NextHead>
      <ThemeProvider>
        <FixedFooter>
          <RecoilRoot>
            <SiteHeader />
            <main id="main" tabIndex={-1} aria-label="メイン">
              <Component {...pageProps} />
            </main>
            <SiteFooter />
          </RecoilRoot>
        </FixedFooter>
      </ThemeProvider>
    </>
  )
}
