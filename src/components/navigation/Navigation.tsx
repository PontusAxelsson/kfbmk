import { NavLink } from "react-router-dom";
import styles from './Navigation.module.scss';
import NewsPaper from "./icons/newspaper";
import Shuttle from "./icons/shuttle";
import MapLocation from "./icons/map-location";
import { SignInButton } from "../signin/SignInButton";

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
			{paths.map(({to, component}, key) => {
				return (
					<NavLink 
						key = {key}
						to = {to}
						className={({isActive})=>(isActive?`${styles.active}`:'')}
					>
						<div className={`${styles.navItem}`}>
							{component}
						</div>
					</NavLink>
				)
			})}
		</div>
	)
}