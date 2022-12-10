import styles from './PageTitle.module.scss'

export const PageTitle = () => {
	// if(matches && matches.length){
	// 	meta = matches
	// 		.map((match)=>{
	// 			const meta = match.route?.meta as AppRouteMeta|undefined
	// 			return meta?.title
	// 		})
	// }
	return (
		<div>
			<div className={styles.logo}></div>
		</div>
	)
}
