import styles from './login-modal.module.scss';
export const LoginModal = () => {
    return (
		<div className="modal-background">
			<div className={`${styles.modalContainer} modal-container`}>
                <div className={`${styles.emailContainer} ${styles.row}`}>
                    <div>Logga in med Email</div>
                    <form action="login()">
                        <label htmlFor="email">
                            <input type="email" name="email" placeholder="E-postadress"/>
                        </label>
                        <label htmlFor="password">
                            <input type="password" name="password" placeholder="Lösenord"/>
                        </label>
                        <button>Logga in</button>
                    </form>
                </div>
				<div className={`${styles.row}`}>
					<hr />
                	<div className='googleButton' />
				</div>
            </div>
        </div>
    )
}
