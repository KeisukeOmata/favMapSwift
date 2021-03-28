import { FC } from 'react'
import { Twitter, Instagram, Github } from 'components/icons'
import { ContentWrapper } from 'components/layouts'
import { Config } from 'lib/site.config'

export const SiteFooter: FC = () => (
  <footer>
    <ContentWrapper>
      <div className="py-6 text-center text-sm flex justify-between flex-wrap upper-line">
        <div className="w-1/2 my-4 sm:w-full">
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
        <div className="w-1/2 my-4 sm:w-full">
          <p>© {Config.copyright}</p>
        </div>
      </div>
    </ContentWrapper>
  </footer>
)
