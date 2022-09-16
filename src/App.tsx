import { Outlet, ReactLocation, Router, useMatches } from 'react-location';
import { Navigation } from './components/navigation/Navigation';
import { SignInButton } from './components/signin/SignInButton';
import { PageTitle } from './components/page_title/PageTitle';
import { AppRouteMeta, PagesRoutes } from './pages/pages-router';
import styles from './App.module.scss'


const App = () => {
	const matches = useMatches();
	const reactLocation = new ReactLocation();
	return (
		<Router
		location={reactLocation}
		routes={PagesRoutes}>
			<div className={ styles.loginButton }>
				<SignInButton />
			</div>
			<PageTitle/>
			<Navigation />
			<Outlet />
		</Router>
	)
}

export default App
