import { DocumentData, DocumentReference, doc, getDoc } from "firebase/firestore"
import { useState } from "react"
import { getUserById } from "../auth/signIn"
import { firebase } from "../auth/firebase"

interface Role {
	add: boolean
	comment: boolean
	delete: boolean
	name: string
	update: boolean
}


export const useFirebaseUser = (uid: string | undefined) => {
	const [userData, setUserData] = useState<DocumentData | undefined>()
	const [userRole, setRole] = useState<Role>({
		add: false,
		comment: false,
		delete: false,
		name: 'user',
		update: false,
	})
	const [isLoading, setIsLoading] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)

	async function queryUserDoc(uid: string) {
		try {
			const userDoc = await getUserById(uid)
			const data = await userDoc.data()
			const role: string = data?.role
			
			setRole(
				(await getDoc(doc(firebase, "roles", role))).data() as Role
			)

			setUserData(userDoc.data())
			setIsLoaded(true)
			setIsLoading(false)
		} catch (error) {
			setIsLoaded(true)
			setIsLoading(false)
		}
	}

	if (uid && !isLoaded) {
		queryUserDoc(uid)
	}

	return {
		userData,
		userRole,
		isLoading,
		isLoaded,
	}
}