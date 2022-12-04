import create from 'zustand';
import Map from '../../components/map';
import { PageTitle } from '../../components/page_title/PageTitle';

interface InfoStore {
	userMenuOpen: boolean;
	toogleOpen: () => void;
}

const FindHereStore = create<InfoStore>((set) => ({
	userMenuOpen: false,
	toogleOpen: () => set((state) => ({ userMenuOpen: !state.userMenuOpen })),
}));

export const FindHere = () => {
	return (
		<div onClick={FindHereStore((state) => state.toogleOpen)}>
			<Map />

			<p>Klubben bedriver all sin verksamhet i Vikenhallen i Furulund. Hallen är utrustad med fem badmintonbanor och ligger vägg i vägg med Vikenbadet. </p>
			<p>Viken idrottshall<br></br>
				Friluftsgatan 6<br></br>
				244 65 Furulund</p>
		</div>
	);
};

export default FindHere;
