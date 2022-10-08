import styles from './login-modal.module.scss';
export const LoginModal = () => {
	return (
		<div className="modal-background">
			<div className={`${styles.modalContainer} modal-container`}>
				<div className={`${styles.emailContainer} ${styles.row}`}>
					<form action="login()">
						<div className="form-group">
							<input type="email" name="email" placeholder="E-postadress"/>
							<label htmlFor="email">E-postadress</label>
						</div>
						<div className="form-group">
							<input type="password" name="password" placeholder="Lösenord"/>
							<label htmlFor="password">Lösenord</label>
						</div>
						<button>Logga in</button>
					</form>
				</div>
				<div className={`${styles.row}`}>
					<hr />
					<button className='button-google' />
				</div>
			</div>
		</div>
	)
}
