import create from 'zustand'
import { useQueryNews } from '../../services/news'
import AddItem from './add-item/add-item'
import { NewsItem } from './item/News_Item'
import { TextWrapper } from '../../components/helpers'
import { collection } from 'firebase/firestore'
import { firebase } from '../../auth/firebase'
import { useFirestoreQuery } from '@react-query-firebase/firestore'

interface NewsStore {
	userMenuOpen: boolean
	toogleOpen: () => void
}

const userStore = create<NewsStore>((set) => ({
	userMenuOpen: false,
	toogleOpen: () => set((state) => ({ userMenuOpen: !state.userMenuOpen })),
}))

export const News = () => {
	const newsRef = collection(firebase, 'news')
	const { data, isLoading } = useFirestoreQuery(['news'], newsRef, {
		subscribe: true,
	})

	console.log(data)
	if (isLoading) {
		return <div>Laddar....</div>
	}
	if (!data || !data.docs) {
		return <div>Kunde inte ladda nyheter.</div>
	}
	if (!data.docs.length) {
		return <div>Inga nyheter.</div>
	}

	return (
		<TextWrapper>
			{data.docs.map((doc) => (
				<div key={doc.id}>
					<h2>Nyheter</h2>
					<NewsItem uid={doc.id} />
				</div>
			))}
			<AddItem />
		</TextWrapper>
	)
}

export default News
