import { FC } from 'react'
import s from './ContentWrapper.module.css'

export const ContentWrapper: FC = ({ children }) => (
  <div className={s.contentWrapper}>{children}</div>
)
