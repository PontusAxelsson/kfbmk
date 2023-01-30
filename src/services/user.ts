import { DocumentData, DocumentReference, getDoc } from "firebase/firestore"
import { useState } from "react"
import { getUserById } from "../auth/signIn"

interface Role {
	add: boolean
	comment: boolean
	delete: boolean
	name: string
	update: boolean
}

export const isAddAllowed = (roles: Role[]): boolean => roles.some((role) => role.add === true)
export const isDeleteAllowed = (roles: Role[]): boolean => roles.some((role) => role.delete === true)
export const isUpdateAllowed = (roles: Role[]): boolean => roles.some((role) => role.update === true)
export const isCommentAllowed = (roles: Role[]): boolean => roles.some((role) => role.comment === true)

export const useFirebaseUser = (uid: string | undefined) => {
	const [userData, setUserData] = useState<DocumentData | undefined>()
	const [userRoles, setRoles] = useState<Role[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)
	if (uid && !isLoaded) {
		async function queryUserDoc() {
			try {
				const docs = await getUserById(uid!)
				const userDoc = docs.docs[0]
				const roles = await userDoc.data().roles
				setRoles([])
				roles.forEach(async (roleRef: DocumentReference) => {
					const role = (await (await getDoc(roleRef)).data()) as Role
					setRoles([...userRoles, role])
				})

				setUserData(userDoc.data())
				setIsLoaded(true)
				setIsLoading(false)
			} catch (error) {
				setIsLoaded(true)
				setIsLoading(false)
			}
		}
		queryUserDoc()
	}
	return {
		userData,
		userRoles,
		isLoading,
		isLoaded,
	}
}