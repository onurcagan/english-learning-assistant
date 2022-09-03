import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './fonts/UniSansHeavy.otf'
import './styles.css'

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
