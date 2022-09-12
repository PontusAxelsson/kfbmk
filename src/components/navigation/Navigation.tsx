import { Link } from "react-location";
import styles from './Navigation.module.scss';
import NewsPaper from "./icons/newspaper";
import Shuttle from "./icons/shuttle";
import MapLocation from "./icons/map-location";

export const Navigation = () => {
	const paths = [
		{
			to: "/news",
			component: <NewsPaper />
		},
		{
			to: "/info",
			component: <Shuttle />
		},
		{
			to: "/map",
			component: <MapLocation />
		},
	]

	return (
		<div className={`${styles.navigation} navigation`}>
			<div className={styles.navbar}></div>
			{paths.map(({to, component}) => {
				return (
					<Link 
						to = {to}
						getActiveProps={() => ({ className: `${styles.active}` })}
					>
						<div className={`${styles.navItem}`}>
							{component}
						</div>
					</Link>
				)
			})}
		</div>
	)
}