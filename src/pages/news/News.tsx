import create from 'zustand'

interface NewsStore {
	userMenuOpen: boolean,
	toogleOpen: () => void
}

const userStore = create<NewsStore>(set => ({
	userMenuOpen: false,
	toogleOpen: () => set(state => ({ userMenuOpen: !state.userMenuOpen })),
}))

export const News = () => {
	return (
		<div onClick={userStore((state)=>state.toogleOpen)}>
			NEWS COMPONENT
		</div>
	)
}

export default News;
