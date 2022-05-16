import { Link } from "react-location";
import styles from './Navigation.module.scss';

export const Navigation = () => {

	return (
		<div className={'navigation '+(styles.navigation||'')}>
			<Link to="/info"> Info </Link>
			<Link to="/news">
				<img className={styles.newspaper} src="/src/assets/icons/newspaper.svg" alt="newspaper_icon"/>
			</Link>
			<Link to="/map"> Find Here </Link>
		</div>
	)
}