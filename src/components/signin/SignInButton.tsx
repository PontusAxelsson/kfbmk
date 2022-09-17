import styles from './SignInButton.module.scss';

export const SignInButton = () => {
	return (
		<button className={`${styles.button} dark`}>
			<span>Logga in</span>
			<img src="src/assets/icons/lock.svg" alt="lock" />
		</button>
	);
}