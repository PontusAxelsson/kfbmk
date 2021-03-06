import { MouseEvent } from 'react'
import { Outlet, ReactLocation, Router } from 'react-location';
import styles from './App.module.scss'
import { Navigation } from './components/navigation/Navigation';
import { PagesRoutes } from './pages/pages-router';

const toggleDarkMode = (e: MouseEvent):void => {
const html = document.querySelector('html') as HTMLHtmlElement;
html.classList.remove('theme-default')
html.classList.toggle('theme-dark')
}

const App = () => {
	const reactLocation = new ReactLocation();
	return (
		<Router
		location={reactLocation}
		routes={PagesRoutes}>
			<Navigation />
			<Outlet />
		</Router>
	)
}

export default App
