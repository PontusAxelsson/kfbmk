import create from 'zustand'
import { PageTitle } from '../../components/page_title/PageTitle'

interface InfoStore {
	userMenuOpen: boolean,
	toogleOpen: () => void
}

const useStore = create<InfoStore>(set => ({
	userMenuOpen: false,
	toogleOpen: () => set(state => ({ userMenuOpen: !state.userMenuOpen })),
}))

export const Info = () => {
	return (
		<div onClick={useStore((state)=>state.toogleOpen)}>
			<h5>Träningstider</h5>
			<p>
				bla bla bla
			</p> 


		</div>
	)
}

export default Info