import { useAuthUser } from '@react-query-firebase/auth'
import { signOut, User } from 'firebase/auth'
import { auth } from '../../auth/firebase'
import { useLoginModalStore } from '../login-modal/login-modal'
import styles from './SignInButton.module.scss'
import lockIcon from '../../assets/icons/lock.svg'

export const SignInText = (user: User | undefined | null): string =>
	user ? 'Logga in' : 'Logga ut'

export const SignInButton = () => {
	const openLoginModal = useLoginModalStore(({ open }) => open)
	return (
		<button
			className={`${styles.button} dark btn`}
			onClick={openLoginModal}
		>
			<span>Logga in</span>
			<img src={lockIcon} alt="lock" />
		</button>
	)
}

export const SignOutButton = () => {
	const signMeOut = () => {
		signOut(auth)
	}
	return (
		<button className={`${styles.button} dark btn`} onClick={signMeOut}>
			<span>Logga ut</span>
			<img src={lockIcon} alt="lock" />
		</button>
	)
}
export const SignInOutButton = () => {
	const { data: userData } = useAuthUser('AuthUser', auth)
	return userData ? <SignOutButton /> : <SignInButton />
}
