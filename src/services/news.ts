import { useFirestoreQuery } from '@react-query-firebase/firestore'
import { collection, doc } from 'firebase/firestore'
import { firebase } from '../auth/firebase'

export const newsRef = collection(firebase, 'news')

export const useQueryNews = () =>
	useFirestoreQuery(['news'], newsRef, { subscribe: true })

export const newsItemRef = (id: string) => doc(newsRef, id)
