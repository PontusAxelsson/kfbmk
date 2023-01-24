import {
	useFirestoreDocument,
	useFirestoreDocumentData,
} from '@react-query-firebase/firestore'
import { collection, doc } from 'firebase/firestore'
import { firebase } from '../../../auth/firebase'
import { newsItemRef } from '../../../services/news'

export const NewsItem = ({ uid }: { uid: string }) => {
	const collectionRef = collection(firebase, 'news')
	const ref = doc(collectionRef, uid)
	const { data, isLoading } = useFirestoreDocument(['news', uid], ref, {
		subscribe: true,
		includeMetadataChanges: true,
	})

	if (isLoading) {
		return <div>Laddar...</div>
	}
	if (!data?.data()) {
		return <div>Kunde inte ladda nyheter.</div>
	}

	const snapshot = data.data()
	return (
		<>
			<div>
				<h4 className="title">{snapshot?.title}</h4>
				{/* <div className="date">{JSON.stringify(snapshot?.created)}</div> */}
			</div>
			<div
				className="news-text"
				dangerouslySetInnerHTML={{ __html: snapshot?.text }}
			></div>
		</>
	)
}
