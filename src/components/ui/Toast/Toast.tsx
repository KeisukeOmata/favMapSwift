import { useTheme } from 'next-themes'
import { FC } from 'react'
import { ToastContainer, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Toast: FC = () => {
  const { theme } = useTheme()

  return (
    <ToastContainer
      toastClassName={
        theme === 'dark'
          ? 'bg-white text-black flex p-1 rounded-md justify-between overflow-hidden cursor-pointer'
          : 'bg-black text-white flex p-1 rounded-md justify-between overflow-hidden cursor-pointer'
      }
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
}
