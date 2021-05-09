import { FC, memo } from 'react'
import s from './ContentWrapper.module.css'

export const ContentWrapper: FC = memo(({ children }) => (
  <div className={s.contentWrapper}>{children}</div>
))

ContentWrapper.displayName = 'ContentWrapper'
