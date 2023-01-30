import { getIdTokenResult, signInWithPopup } from 'firebase/auth'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { auth, googleProvider, emailAuthProvider, firebase } from './firebase'

// export const signInWithEmail = async () => {
// 	try {
// 		const res = await signInWithPopup(auth, emailAuthProvider)

// 		const user = res.user
// 		const q = query(
// 			collection(firebase, 'users'),
// 			where('uid', '==', user.uid),
// 		)
// 		const docs = await getDocs(q)
// 		if (docs.docs.length === 0) {
// 			await addDoc(collection(firebase, 'users'), {
// 				uid: user.uid,
// 				name: user.displayName,
// 				authProvider: 'google',
// 				email: user.email,
// 			})
// 		}
// 	} catch (err) {
// 		console.error(err)
// 	}
// }

export const getUserById = async (uid: string) =>{
	const q = query(
		collection(firebase, 'users'),
		where('uid', '==', uid),
	)
	return await getDocs(q)
}

export const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider)
		const user = res.user

		const docs = await getUserById(user.uid)
		if (docs.docs.length === 0) {
			await addDoc(collection(firebase, 'users'), {
				uid: user.uid,
				name: user.displayName,
				authProvider: 'google',
				email: user.email
			})
		}
	} catch (err) {
		console.error(err)
	}
}
