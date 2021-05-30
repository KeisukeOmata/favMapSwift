import Link from 'next/link'
import { FC, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { toast } from 'react-toastify'
import { ContentWrapper, CartLink } from 'components/layouts'
import { DarkMode, Toast } from 'components/ui'
import { auth } from 'lib/firebase'
import { Config } from 'lib/site.config'
import {
  useAuth,
  useLoading,
  useMounted,
  useRecoilFocusItem,
  useRecoilQuantity,
} from 'lib/hooks/state'
import s from './SiteHeader.module.css'

export const SiteHeader: FC = () => {
  const { currentUser, setCurrentUser } = useAuth()
  const { loadingState, setLoadingState } = useLoading()
  const { mountedState, setMountedState } = useMounted()
  const { setFocusItemState } = useRecoilFocusItem()
  const { getQuantityState } = useRecoilQuantity()
  const quantityState = getQuantityState()
  const { theme, setTheme } = useTheme()

  const logOut = async () => {
    setLoadingState(true)
    try {
      await auth.signOut()
      await setCurrentUser(null)
      setLoadingState(false)
    } catch (error) {
      setLoadingState(false)
      toast(error.message)
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [setCurrentUser])

  return (
    <header className={s.siteHeader}>
      {console.log(currentUser)}
      <ContentWrapper>
        <Toast theme={theme} />
        <div className="flex justify-between">
          <Link href="/" passHref>
            <button
              aria-label="このサイトの名前"
              onClick={() => setFocusItemState(null)}
            >
              {Config.brandName}
            </button>
          </Link>
          <div className="flex">
            <Link href={'/world'} passHref>
              <button
                aria-label="about usを表示する"
                onClick={() => setFocusItemState(null)}
              >
                World
              </button>
            </Link>
            <div className={s.slash}>/</div>
            <DarkMode
              mountedState={mountedState}
              theme={theme}
              setMountedState={setMountedState}
              setTheme={setTheme}
            />
            <div className={s.slash}>/</div>
            {currentUser && currentUser.emailVerified ? (
              <button
                aria-label="ログアウトする"
                disabled={loadingState}
                onClick={logOut}
              >
                Logout
              </button>
            ) : (
              <Link href={'/login'} passHref>
                <button
                  aria-label="ログイン画面を表示する"
                  onClick={() => setFocusItemState(null)}
                >
                  Login
                </button>
              </Link>
            )}
          </div>
          <CartLink
            quantityState={quantityState}
            setFocusItemState={setFocusItemState}
          />
        </div>
      </ContentWrapper>
    </header>
  )
}
