import { auth } from '../../../auth/firebase'
import { useFirestoreDocument } from '../../../auth/react-query-firebase/firestore'
import { newsItemRef, newsRef, queryNewsItem } from '../../../services/news'

export const NewsItem = (params: { uid: string }) => {
	const ref = newsItemRef(params.uid)
	const query = useFirestoreDocument(['news', params.uid], ref)

	if (query.isLoading) {
		return <div>Laddar...</div>
	}
	if (!query.data?.data()) {
		return <div>Kunde inte ladda nyheter.</div>
	}

	const snapshot = query.data.data()
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
