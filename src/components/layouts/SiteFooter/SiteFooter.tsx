import Link from 'next/link'
import { FC } from 'react'
import { ContentWrapper } from 'components/layouts'
import { Twitter, Instagram, Github } from 'components/icons'
import { Config } from 'lib/site.config'

export const SiteFooter: FC = () => (
  <footer className="py-6">
    <ContentWrapper>
      <div className="flex flex-wrap justify-between text-sm text-center upper-line">
        <div className="flex justify-center items-center py-6 sm:pt-8 sm:pb-0 w-1/2 sm:w-full">
          <a
            href={Config.siteURL.twitter}
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
          >
            <button aria-label="Twitterへのリンク">
              <Twitter />
            </button>
          </a>
          <a
            className="px-3"
            href={Config.siteURL.instagram}
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
          >
            <button aria-label="Instagramへのリンク">
              <Instagram />
            </button>
          </a>
          <a
            href={Config.siteURL.github}
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
          >
            <button aria-label="Githubへのリンク">
              <Github />
            </button>
          </a>
        </div>
        <div className="flex flex-col py-6 w-1/2 sm:w-full">
          <Link href={'/terms'} passHref>
            <button className="p-2" aria-label="利用規約を表示する">
              利用規約
            </button>
          </Link>
          <Link href={'/privacy'} passHref>
            <button className="p-2" aria-label="プライバシーポリシーを表示する">
              プライバシーポリシー
            </button>
          </Link>
          <Link href={'/legal'} passHref>
            <button
              className="p-2"
              aria-label="特定商取引法に基づく表示を表示する"
            >
              特定商取引法に基づく表示
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full text-sm text-center">
        <p>© {Config.copyright}</p>
      </div>
    </ContentWrapper>
  </footer>
)
