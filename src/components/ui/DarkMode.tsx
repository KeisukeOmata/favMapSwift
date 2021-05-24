import { FC, useEffect } from 'react'
import { Moon, Sun } from 'components/icons'
import { Skeleton } from 'components/ui'

type Props = {
  mountedState: boolean
  theme: string | undefined
  setMountedState: (mountedState: boolean) => void
  setTheme: (theme: string) => void
}

export const DarkMode: FC<Props> = ({
  mountedState,
  theme,
  setMountedState,
  setTheme,
}) => {
  // When mounted on client, now we can show the UI
  useEffect(() => setMountedState(true), [setMountedState])

  return (
    <>
      {mountedState ? (
        <button
          aria-label="ダークモードとライトモードを入れ替える"
          onClick={() => {
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }}
        >
          <div>{theme === 'dark' ? <Moon /> : <Sun />}</div>
        </button>
      ) : (
        <Skeleton width="24px" height="24px" />
      )}
    </>
  )
}
