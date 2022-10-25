import { useLoginModalStore } from '../login-modal/login-modal';
import styles from './SignInButton.module.scss';


export const SignInButton = () => {
	const openLoginModal = useLoginModalStore(({open}) => open)
	return (
		<button className={`${styles.button} dark btn`} onClick={openLoginModal}>
			<span>Logga in</span>
			<img src="src/assets/icons/lock.svg" alt="lock" />
		</button>
	);
}