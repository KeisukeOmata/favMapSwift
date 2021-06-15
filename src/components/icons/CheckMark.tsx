import { FC } from 'react'
import { useTheme } from 'next-themes'
import { getColor } from 'lib/helper/components'
import { useMountedState } from 'lib/hooks/state'

type Props = {
  colorState: string
}

export const CheckMark: FC<Props> = ({ colorState }) => {
  const { theme } = useTheme()
  const color = getColor(theme, colorState)
  const { mountedState } = useMountedState()

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
