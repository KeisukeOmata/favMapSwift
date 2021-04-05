import { FC, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

type props = {
  colorState: string | null
}

export const CheckMark: FC<props> = ({ colorState }) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  let color
  if (theme === 'dark') {
    if (colorState === 'Black') {
      color = 'white'
    } else {
      color = 'currentColor'
    }
  } else {
    if (colorState === 'White' || colorState === 'Ivory') {
      color = 'black'
    } else {
      color = 'currentColor'
    }
  }

  return (
    <>
      {mounted ? (
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
      ) : null}
    </>
  )
}
