import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useEffect, useState } from 'react'
import { newsRef } from '../../../services/news'
import { auth, firebase } from '../../../auth/firebase'
import {
	useFirestoreCollectionMutation,
	useFirestoreDocument,
} from '@react-query-firebase/firestore'
import { useAuthUser } from '@react-query-firebase/auth'
import {
	collection,
	doc,
	DocumentData,
	QueryDocumentSnapshot,
	QuerySnapshot,
} from 'firebase/firestore'
import { getUserById } from '../../../auth/signIn'

const useFirebaseUsers = (uid: string | undefined) => {
	const [data, setData] = useState<DocumentData | undefined>()
	const [isLoading, setIsLoading] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)
	if (uid && !isLoaded) {
		async function queryUserDoc() {
			try {
				const docs = await getUserById(uid!)
				const userDoc = docs.docs[0]
				setData(userDoc.data())
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
		data,
		isLoading,
		isLoaded,
	}
}

export const AddItem = () => {
	const user = useAuthUser('AuthUser', auth)
	const mutationNews = useFirestoreCollectionMutation(newsRef)
	const { data: userData } = useFirebaseUsers(user.data?.uid)

	const [title, setTitle] = useState<string>('')
	const [itemData, setItemData] = useState<string>('')

	const addNewsItem = (formEvent: React.FormEvent<HTMLFormElement>) => {
		formEvent.preventDefault()
		if (!user.data?.uid) return
		mutationNews.mutate({
			created: new Date(),
			created_by: user.data?.uid,
			text: itemData,
			title,
		})
	}
	if (!user.data) {
		return <></>
	}
	return (
		<form onSubmit={addNewsItem}>
			<div className="form-group">
				{JSON.stringify(userData?.roles)}
				<input
					value={title}
					onChange={(event) => setTitle(event.target.value)}
					type="titel"
					name="titel"
					placeholder="E-postadress"
					required
				/>
				<label htmlFor="titel">Titel</label>
			</div>
			<CKEditor
				editor={ClassicEditor}
				data={itemData}
				onChange={(event, editor) => setItemData(editor.getData())}
			/>
			<button type="submit" className="btn">
				Lägg till
			</button>
		</form>
	)
}

export default AddItem
