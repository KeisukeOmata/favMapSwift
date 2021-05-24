import { FC, useEffect } from 'react'

type Props = {
  colorState: string
  mountedState: boolean
  theme: string | undefined
  setMountedState: (mountedState: boolean) => void
}

export const CheckMark: FC<Props> = ({
  colorState,
  mountedState,
  theme,
  setMountedState,
}) => {
  const getColor = (theme: string | undefined, colorState: string): string => {
    if (theme === 'dark') {
      return colorState === 'Black' ? 'white' : 'currentColor'
    } else {
      return colorState === 'White' || colorState === 'Ivory'
        ? 'black'
        : 'currentColor'
    }
  }

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
