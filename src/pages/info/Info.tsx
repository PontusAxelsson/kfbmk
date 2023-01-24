import { TextWrapper } from '../../components/helpers'

export const Info = () => {
	return (
		<TextWrapper>
			<h2>Välkommen till Kävlinge-Furulund Badmintonklubb</h2>
			<hr />
			<h3>Träningsgrupper</h3>
			<h4>Nybörjargrupp</h4>
			<p>
				Alla barn och ungdomar som vill börja spela badminton börjar i
				nybörjargruppen. Här lär vi oss grunderna i badminton på ett
				lekfullt sätt samtidigt som vi tränar mycket koordination.
			</p>
			<h5>Träningstider:</h5>
			<p>Måndagar och Onsdagar 18.00 - 19.00 i Vikenhallen</p>

			<h4>Fortsättningsgrupp</h4>
			<p>
				När man är motiverad att lära sig mer om badminton blir
				nybörjargruppen för enkel. I fortsättningsgruppen är nivån högre
				och övningarna tekniskt svårare. Många spelare i denna gruppen
				åker ut och tävlar eller provar på att spela i serielaget med
				seniorerna.
			</p>
			<h5>Träningstider:</h5>
			<p>Måndagar och Onsdagar 19.00 - 20.00 i Vikenhallen</p>

			<h4>Serielag/Senior/Motionär</h4>
			<p>
				Klubben har två serielag i allsvenska seriesystemet. Träningen i
				denna gruppen inriktar sig på serielagsspelarna. Gruppen är
				öppen för alla seniorer som tycker det är kul att spela
				badminton. Träningen anpassas efter vilka spelare som är på
				plats. Det finns alltid någon att spela med.
			</p>
			<h5>Träningstider:</h5>
			<p>Måndagar och Onsdagar 20.00 - 22.00 i Vikenhallen</p>
			<hr />
			<h3>Träningsavgifter</h3>
			<p>Medlemsavgift per spelsäsong: 200:-/person.</p>
			<p>
				Träningsvgifter för de som spelar i träningsgrupper säsongen
				2020/2021.
			</p>

			<table>
				<tbody>
					<tr>
						<th>Åldersgrupp</th>
						<th>Avgift</th>
					</tr>
					<tr>
						<td>7 - 14 år</td>
						<td>700 kr</td>
					</tr>
					<tr>
						<td>15 - 19 år</td>
						<td>1300 kr</td>
					</tr>
					<tr>
						<td>20 år och äldre</td>
						<td>1700 kr</td>
					</tr>
				</tbody>
			</table>
		</TextWrapper>
	)
}

export default Info
