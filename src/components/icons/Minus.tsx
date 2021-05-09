import { FC, memo } from 'react'

export const Minus: FC = memo(() => (
  <svg
    role="button"
    aria-label="マイナスのアイコン"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
))

Minus.displayName = 'Minus'
