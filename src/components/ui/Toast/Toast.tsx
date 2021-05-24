import { FC } from 'react'
import { ToastContainer, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import s from './Toast.module.css'

type Props = {
  theme: string | undefined
}

export const Toast: FC<Props> = ({ theme }) => (
  <ToastContainer
    toastClassName={theme === 'dark' ? s.dark : s.light}
    bodyClassName={'text-sm font-med block p-3'}
    autoClose={3000}
    position="top-center"
    hideProgressBar={true}
    closeOnClick={true}
    draggable={false}
    pauseOnHover={false}
    pauseOnFocusLoss={false}
    transition={Flip}
  />
)
