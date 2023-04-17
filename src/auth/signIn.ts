import { signInWithPopup } from 'firebase/auth'
import { setDoc,collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore'
import { auth, googleProvider, firebase } from './firebase'

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

export const getUserById = async (uid: string) => await getDoc(doc(firebase, "users", uid));

export const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider)
		const user = res.user

		const refUserDoc = doc(firebase, "users", user.uid)
		const userDoc = await getDoc(refUserDoc);
		if (!userDoc) {
			await setDoc(refUserDoc,
				{
					name: user.displayName,
					authProvider: 'google',
					email: user.email,
					role: 'user'
				}
			)
		}
	} catch (err) {
		console.error(err)
	}
}
