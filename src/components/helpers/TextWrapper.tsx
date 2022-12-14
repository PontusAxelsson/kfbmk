import styles from './TextWrapper.module.scss'
import { ReactNode } from 'react'
interface Props {
	children?: ReactNode
}
export const TextWrapper = ({ children }: Props) => (
	<div className={styles.TextWrapper}>{children}</div>
)
