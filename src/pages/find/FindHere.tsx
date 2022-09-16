import create from 'zustand'
import { PageTitle } from '../../components/page_title/PageTitle'

interface InfoStore {
	userMenuOpen: boolean,
	toogleOpen: () => void
}

const FindHereStore = create<InfoStore>(set => ({
	userMenuOpen: false,
	toogleOpen: () => set(state => ({ userMenuOpen: !state.userMenuOpen })),
}))

export const FindHere = () => {
	return (
		<div onClick={FindHereStore((state)=>state.toogleOpen)}>
			FIND HERE COMPONENT
		</div>
	)
}

export default FindHere;
