import styles from './login-modal.module.scss';
import create from 'zustand';
import { signInWithEmail, signInWithGoogle } from '../../auth/signIn';
import { signOut } from '../../auth/signOut';
import { BaseSyntheticEvent, useState } from 'react';

export interface LoginModalState {
	isOpen: boolean;
	close: () => void;
	open: () => void;
	toogle: () => void;
}

export const useLoginModalStore = create<LoginModalState>((set) => ({
	isOpen: false,
	close: () => set({ isOpen: false }),
	open: () => set({ isOpen: true }),
	toogle: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
}))

export const LoginModal = () => {
	const closeLoginModal = useLoginModalStore(({ close }) =>close);

	const [ email, setEmail ] = useState<string>();
	const [ password, setPassword ] = useState<string>();

	const logIn = async (e: BaseSyntheticEvent) => {
		e.preventDefault();
		if (!email || !password) return;
		const signedIn = await signInWithEmail(email, password)
		if(signedIn) {
			closeLoginModal()
		}
	}

	return (
		<div className="modal-background" onClick={closeLoginModal} id="modal-background">
			<div
				className={`${styles.modalContainer} modal-container`}
				onClick={(e)=>{
					e.stopPropagation();
				}}
			>
				<a href="#" onClick={closeLoginModal}>
					<svg className={styles.close} viewBox="0 0 1000 1000">
						<g>
							<path d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M500,877.9c-208.7,0-377.9-169.2-377.9-377.9c0-208.7,169.2-377.9,377.9-377.9c208.7,0,377.9,169.2,377.9,377.9C877.9,708.7,708.7,877.9,500,877.9z" />
							<path d="M693.3,349.7l-43-43c-11.9-11.9-31.1-11.9-42.9,0L500,414.1L392.6,306.7c-11.9-11.9-31.1-11.9-42.9,0l-42.9,43c-11.9,11.9-11.9,31.1,0,42.9L414.1,500L306.7,607.4c-11.9,11.9-11.9,31.1,0,42.9l42.9,43c11.9,11.9,31.1,11.9,42.9,0L500,585.9l107.4,107.4c11.9,11.9,31.1,11.9,42.9,0l43-43c11.9-11.9,11.9-31.1,0-42.9L585.9,500l107.4-107.4C705.2,380.7,705.2,361.5,693.3,349.7z" />
						</g>
					</svg>
				</a>
				<div className={`${styles.emailContainer} ${styles.row}`}>
					<form>
						<div className="form-group">
							<input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="E-postadress" />
							<label htmlFor="email">E-postadress</label>
						</div>
						<div className="form-group">
							<input type="password" onChange={(e)=>setPassword(e.target.value)}  name="password" placeholder="Lösenord" />
							<label htmlFor="password">Lösenord</label>
						</div>
						<button className='btn'>Logga in</button>
					</form>
				</div>
				<div className={`${styles.row}`}>
					<hr />
					<button className='btn button-google' onClick={signInWithGoogle}/>
					<button className='btn' onClick={signOut}>Logga ut</button>
				</div>
			</div>
		</div>
	)
}
