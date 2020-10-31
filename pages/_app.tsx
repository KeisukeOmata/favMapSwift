import { RecoilRoot } from 'recoil'
import '../lib/firebase'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // RecoilRoot
    // グローバルなデータ管理を行う
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp