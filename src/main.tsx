import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.scss'

declare global {
	interface Window {
		initMap: () => void
	}
}

const queryClient = new QueryClient()

window.initMap = () => {
	console.log('loaded map')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>,
)
