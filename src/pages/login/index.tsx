import { FC, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { PageSEO, ContentWrapper } from 'components/layouts'
import { Toast, Button } from 'components/ui'
import { auth } from 'lib/firebase'
import { useAuth, useLoading } from 'lib/hooks/state'
import { Config } from 'lib/site.config'

type Inputs = {
  email: string
  password: string
}

const Login: FC = () => {
  const { currentUser, setCurrentUser } = useAuth()
  const { register, handleSubmit } = useForm<Inputs>()
  const { loadingState, setLoadingState } = useLoading()
  const router = useRouter()
  const { theme } = useTheme()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoadingState(true)
    try {
      await auth.signInWithEmailAndPassword(data.email, data.password)
      setLoadingState(false)
      router.push('/')
    } catch (err) {
      setLoadingState(false)
      toast(err.message)
    }
  }

  const sendEmailVerification = async () => {
    setLoadingState(true)
    try {
      await auth.currentUser?.sendEmailVerification()
      setLoadingState(false)
      toast('認証メールを再送しました')
    } catch (err) {
      setLoadingState(false)
      toast(err.message)
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        if (!user.emailVerified) return
        router.push('/')
      }
    })
  }, [router, setCurrentUser])

  return (
    <>
      <PageSEO title="Login" path="/login" ogImageUrl={Config.defaultOGImage} />
      <div className="text-center py-12">
        <ContentWrapper>
          <Toast theme={theme} />
          <div className="under-line flex py-1.5">
            <h2 id="head" tabIndex={-1}>
              Login
            </h2>
          </div>
          {currentUser && !currentUser.emailVerified ? (
            <>
              <p className="leading-tight font-bold text-7xl py-6">
                登録が未完了です
              </p>
              <h1 className="pb-12">
                メール内のリンクをクリックして登録を完了させてください。
              </h1>
              <Button
                shape="square"
                type="button"
                aria-label="認証メールを再送する"
                onClick={sendEmailVerification}
                loading={loadingState}
              >
                メールを再送する
              </Button>
              <br></br>
              <br></br>
              <Link href="/signup" passHref>
                <button aria-label="新規登録画面を表示する">
                  新規登録を行う
                </button>
              </Link>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col pt-6">
                  <input
                    className="bg-primary py-2 px-6 border"
                    type="email"
                    placeholder="Email"
                    {...register('email', { required: true })}
                  />
                  <br></br>
                  <input
                    className="bg-primary py-2 px-6 border"
                    type="text"
                    placeholder="Password"
                    {...register('password', { required: true, min: 6 })}
                  />
                  <br></br>
                </div>
                <Button
                  aria-label="ログインをする"
                  type="submit"
                  shape="square"
                  loading={loadingState}
                >
                  ログイン
                </Button>
              </form>
              <br></br>
              <Link href="/signup" passHref>
                <button aria-label="新規登録画面を表示する">
                  新規登録を行う
                </button>
              </Link>
            </>
          )}
        </ContentWrapper>
      </div>
    </>
  )
}

export default Login
