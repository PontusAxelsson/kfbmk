import { useState } from 'react'
import { newsRef } from '../../../services/news'
import { auth } from '../../../auth/firebase'
import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore'
import { useAuthUser } from '@react-query-firebase/auth'
import { useFirebaseUser } from '../../../services/user'

export const AddItem = () => {
	const user = useAuthUser('AuthUser', auth)
	const mutationNews = useFirestoreCollectionMutation(newsRef)
	const { userRole } = useFirebaseUser(user.data?.uid)

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

	if (!userRole.add) {
		return <></>
	}
	return (
		<form onSubmit={addNewsItem}>
			<div className="form-group">
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
			<textarea
				onChange={(event) => setItemData(event.target.value)}
				rows={4}
				style={{ width: '100%' }}
				required
			></textarea>
			<button type="submit" className="btn">
				Lägg till
			</button>
		</form>
	)
}

export default AddItem
