import create from 'zustand'
import { PageTitle } from '../../components/page_title/PageTitle'

interface InfoStore {
	userMenuOpen: boolean
	toogleOpen: () => void
}

const useStore = create<InfoStore>((set) => ({
	userMenuOpen: false,
	toogleOpen: () => set((state) => ({ userMenuOpen: !state.userMenuOpen })),
}))

export const Info = () => {
	return (
		<div onClick={useStore((state) => state.toogleOpen)}>
			<h2>Välkommen till Kävling Furulund Badmintonklubb</h2>
			<h3>Träningsgrupper</h3>
			<h5>Nybörjargrupp</h5>
			<p>
				Alla barn och ungdomar som vill börja spela badminton börjar i
				nybörjargruppen. Här lär vi oss grunderna i badminton på ett
				lekfullt sätt samtidigt som vi tränar mycket koordination.
			</p>
			<p>
				Träningstider: Måndagar och Onsdagar 18.00 - 19.00 i Vikenhallen
			</p>

			<h5> Fortsättningsgrupp</h5>
			<p>
				När man är motiverad att lära sig mer om badminton blir
				nybörjargruppen för enkel. I fortsättningsgruppen är nivån högre
				och övningarna tekniskt svårare. Många spelare i denna gruppen
				åker ut och tävlar eller provar på att spela i serielaget med
				seniorerna.
			</p>
			<p>
				Träningstider: Måndagar och Onsdagar 19.00 - 20.00 i Vikenhallen
			</p>

			<h5> Serielag/Senior/Motionär</h5>
			<p>
				Klubben har två serielag i allsvenska seriesystemet. Träningen i
				denna gruppen inriktar sig på serielagsspelarna. Gruppen är
				öppen för alla seniorer som tycker det är kul att spela
				badminton. Träningen anpassas efter vilka spelare som är på
				plats. Det finns alltid någon att spela med.
			</p>
			<p>
				Träningstider: Måndagar och Onsdagar 20.00 - 22.00 i Vikenhallen
			</p>

			<h3>Träningsavgifter</h3>
			<p>
				Medlemsavgift per spelsäsong: kr 200:-/person. <br></br>
				Träningsvgifter för de som spelar i träningsgrupper säsongen
				2020/2021.
				<br></br>
			</p>

			<table>
				<tbody>
					<tr>
						<th> Åldersgrupp </th>
						<th> Avgift </th>
					</tr>
					<tr>
						<td> 7 - 14 år </td>
						<td> 700 kr </td>
					</tr>
					<tr>
						<td> 15 - 19 år </td>
						<td> 1300 kr </td>
					</tr>
					<tr>
						<td> 20 år och äldre </td>
						<td> 1700 kr </td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Info
