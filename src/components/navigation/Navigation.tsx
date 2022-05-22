import { Link } from "react-location";
import styles from './Navigation.module.scss';
import NewsPaper from "./icons/newspaper";
import Shuttle from "./icons/shuttle";
import MapLocation from "./icons/map-location";

export const Navigation = () => {

	return (
		<div className={`${styles.navigation} navigation`}>
			<div className={styles.navbar}></div>
			<Link to="/news">
				<div className={`${styles.navItem}`}>
					<NewsPaper />
				</div>
			</Link>
			<Link to="/info">
				<div className={`${styles.navItem}`}>
					<Shuttle />
				</div>
			</Link>
			<Link to="/map">
				<div className={`${styles.navItem}`}>
					<MapLocation />
				</div>
			</Link>
		</div>
	)
}