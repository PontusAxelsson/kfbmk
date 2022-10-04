import { Outlet, ReactLocation, Router } from 'react-location';
import { Navigation } from './components/navigation/Navigation';
import { SignInButton } from './components/signin/SignInButton';
import { PageTitle } from './components/page_title/PageTitle';
import { PagesRoutes } from './pages/pages-router';
import styles from './App.module.scss'
import { LoginModal } from './components/login-modal/login-modal';


const App = () => {
	const reactLocation = new ReactLocation();
	return (
		<Router
			location={reactLocation}
			routes={PagesRoutes}
		>
			<div className={ styles.loginButton }>
				<SignInButton />
			</div>
			<LoginModal />
			<PageTitle/>
			<Navigation />
			<Outlet />
		</Router>
	)
}

export default App
