import create from 'zustand'
import { queryNews } from '../../services/news'
import AddItem from './add-item/add-item'
import { NewsItem } from './item/News_Item'
import { LoginModal } from '../../components/login-modal/login-modal'
import { TextWrapper } from '../../components/helpers'

interface NewsStore {
	userMenuOpen: boolean
	toogleOpen: () => void
}

const userStore = create<NewsStore>((set) => ({
	userMenuOpen: false,
	toogleOpen: () => set((state) => ({ userMenuOpen: !state.userMenuOpen })),
}))

export const News = () => {
	const query = queryNews()

	if (query.isLoading) {
		return <div>Laddar...</div>
	}
	if (!query.data || !query.data.docs) {
		return <div>Kunde inte ladda nyheter.</div>
	}
	if (!query.data.docs.length) {
		return <div>Inga nyheter.</div>
	}

	return (
		<>
			{query.data.docs.map((doc) => (
				<TextWrapper>
					<h2>Nyheter</h2>
					<NewsItem key={doc.id} uid={doc.id} />
				</TextWrapper>
			))}
			<AddItem />
		</>
	)
}

export default News
