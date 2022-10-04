import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from 'react-location'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import './styles/index.scss'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
)
