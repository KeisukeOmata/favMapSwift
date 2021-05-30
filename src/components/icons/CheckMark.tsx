import { FC, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

type Props = {
  colorState: string
}

export const CheckMark: FC<Props> = ({ colorState }) => {
  const getColor = (theme: string | undefined, colorState: string): string => {
    if (theme === 'dark') {
      return colorState === 'Black' ? 'white' : 'currentColor'
    } else {
      return colorState === 'White' || colorState === 'Ivory'
        ? 'black'
        : 'currentColor'
    }
  }

  const { theme } = useTheme()
  const [mountedState, setMountedState] = useState<boolean>(false)
  const color = getColor(theme, colorState)

  // When mounted on client, now we can show the UI
  useEffect(() => setMountedState(true), [setMountedState])

  return (
    <>
      {mountedState && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
        >
          <path
            d="M20 6L9 17L4 12"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  )
}
