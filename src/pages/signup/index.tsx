import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
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
  passwordConfirmation: string
}

const SignUp: FC = () => {
  const { setCurrentUser } = useAuth()
  const { register, handleSubmit } = useForm<Inputs>()
  const { loadingState, setLoadingState } = useLoading()
  const router = useRouter()
  const { theme } = useTheme()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoadingState(true)
    if (data.password !== data.passwordConfirmation) {
      setLoadingState(false)
      toast('パスワードが確認と異なります')
      return
    }
    try {
      await auth.createUserWithEmailAndPassword(data.email, data.password)
      await auth.currentUser?.sendEmailVerification()
      setLoadingState(false)
      toast('認証メールを送信しました')
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
      <PageSEO
        title="Signup"
        path="/signup"
        ogImageUrl={Config.defaultOGImage}
      />
      <div className="text-center py-12">
        <ContentWrapper>
          <Toast theme={theme} />
          <div className="under-line flex py-1.5">
            <h2 id="head" tabIndex={-1}>
              Signup
            </h2>
          </div>
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
                placeholder="Passwordを6文字以上で入力"
                {...register('password', { required: true, min: 6 })}
              />
              <br></br>
              <input
                className="bg-primary py-2 px-6 border"
                type="text"
                placeholder="Passwordを再入力"
                {...register('passwordConfirmation', {
                  required: true,
                  min: 6,
                })}
              />
              <br></br>
            </div>
            <Button
              aria-label="新規登録をする"
              type="submit"
              shape="square"
              loading={loadingState}
            >
              新規登録
            </Button>
          </form>
          <br></br>
          <Link href="/login" passHref>
            <button aria-label="ログイン画面を表示する">ログインする</button>
          </Link>
        </ContentWrapper>
      </div>
    </>
  )
}

export default SignUp
