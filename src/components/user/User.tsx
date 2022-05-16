import { useState } from "react";
import { auth } from "../../auth/firebase"
import { useAuthUser } from "../../auth/react-query-firebase/auth"
import create from 'zustand'
import styles from './User.module.scss'

interface UserStore {
	userMenuOpen: boolean,
	toogleOpen: () => void
}

const useStore = create<UserStore>(set => ({
	userMenuOpen: false,
	toogleOpen: () => set(state => ({ userMenuOpen: !state.userMenuOpen })),
}))

export const UserMenu = () => {
	const open = useStore(state => state.userMenuOpen)
	if(!open) return null;
	return (
		<div className={styles.userMenu} onClick={(e)=>{e.stopPropagation()}}>HELLO</div>
	)
}

export const UserImage = () => {
	const user = useAuthUser('AuthUser', auth)
	if(!user.data?.photoURL) return null;
	return <img className={styles.userImage} src={user.data?.photoURL}></img>
}

export const User = () => {
	const user = useAuthUser('AuthUser', auth)

	return (
		<div onClick={useStore((state)=>state.toogleOpen)}>
			<div className={styles.user}>
				<UserImage />{user.data?.displayName}
			</div>
			<UserMenu></UserMenu>
		</div>
	)
}