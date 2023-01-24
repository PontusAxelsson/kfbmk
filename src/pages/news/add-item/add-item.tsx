import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useEffect, useMemo, useState } from 'react'
import { newsRef } from '../../../services/news'
import { auth } from '../../../auth/firebase'
import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore'
import { useAuthUser } from '@react-query-firebase/auth'

export const AddItem = () => {
	const [title, setTitle] = useState<string>('')
	const [itemData, setItemData] = useState<string>('')
	const user = useAuthUser('AuthUser', auth)
	const mutationNews = useFirestoreCollectionMutation(newsRef)

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
