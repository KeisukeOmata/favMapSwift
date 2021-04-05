import Link from 'next/link'
import { FC } from 'react'
import { Twitter, Instagram, Github } from 'components/icons'
import { ContentWrapper } from 'components/layouts'
import { Config } from 'lib/site.config'

export const SiteFooter: FC = () => (
  <footer>
    <ContentWrapper>
      <div className="py-6 text-center text-sm flex justify-between flex-wrap upper-line">
        <div className="flex items-center justify-center w-1/2 my-4 sm:w-full">
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
            className="mr-3 ml-3"
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
        <div className="flex flex-col w-1/2 my-4 sm:w-full">
          <Link href={'/terms'} passHref>
            <button aria-label="利用規約を表示する">利用規約</button>
          </Link>
          <Link href={'/privacy'} passHref>
            <button aria-label="プライバシーポリシーを表示する">
              プライバシーポリシー
            </button>
          </Link>
          <Link href={'/legal'} passHref>
            <button aria-label="特定商取引法に基づく表示を表示する">
              特定商取引法に基づく表示
            </button>
          </Link>
        </div>
      </div>
      <div className="my-4 w-full text-center text-sm">
        <p>© {Config.copyright}</p>
      </div>
    </ContentWrapper>
  </footer>
)
