import { SignInButton } from './components/signin/SignInButton'
import { PageTitle } from './components/page_title/PageTitle'
import styles from './App.module.scss'
import {
	LoginModal,
	useLoginModalStore,
} from './components/login-modal/login-modal'
import { Route, Routes, Navigate } from 'react-router-dom'
import News from './pages/news/News'
import Info from './pages/info/Info'
import FindHere from './pages/find/FindHere'
import { Navigation } from './components/navigation/Navigation'
import { Suspense } from 'react'

const Loading = () => <div>...laddar</div>

const App = () => {
	const isLoginModalOpen = useLoginModalStore(({ isOpen }) => isOpen)
	return (
		<div>
			<div className={styles.loginButton}>
				<SignInButton />
			</div>
			{isLoginModalOpen ? <LoginModal /> : ''}
			<div className={styles.main}>
				<PageTitle />
				<Routes>
					<Route
						path="/info"
						element={
							<Suspense fallback={<Loading />}>
								<Info />
							</Suspense>
						}
					/>
					<Route
						path="/news"
						element={
							<Suspense fallback={<Loading />}>
								<News />
							</Suspense>
						}
					/>
					<Route
						path="/map"
						element={
							<Suspense fallback={<Loading />}>
								<FindHere />
							</Suspense>
						}
					/>
					<Route path="*" element={<Navigate to="/info" replace />} />
				</Routes>
			</div>
			<Navigation />
		</div>
	)
}

export default App
