import { useMatches } from "react-location"
import { AppRouteMeta } from "../../pages/pages-router"

export const PageTitle = () => {
	const matches = useMatches()
	let meta: (string | undefined)[] = []
	if(matches && matches.length){
		meta = matches
			.map((match)=>{
				const meta = match.route?.meta as AppRouteMeta|undefined
				return meta?.title
			})
	}
	return (
		<div>
			{
				meta.map((meta,i)=><div key={i}>{meta}</div>)
			}
		</div>
	)
}