import { collection, doc } from 'firebase/firestore'
import { firebase } from '../auth/firebase'
import {
	useFirestoreQuery,
	useFirestoreCollectionMutation,
} from '../auth/react-query-firebase/firestore'

export const newsRef = collection(firebase, 'news')

export const queryNews = () =>
	useFirestoreQuery(['news'], newsRef, { subscribe: true })

export const newsItemRef = (id: string) => doc(newsRef, id)
