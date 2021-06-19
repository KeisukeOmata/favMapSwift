import { FC } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'components/icons'
import { Skeleton } from 'components/ui'
import { useMountedState } from 'lib/hooks/state'

export const DarkMode: FC = () => {
  const { theme, setTheme } = useTheme()
  const { mountedState } = useMountedState()

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
