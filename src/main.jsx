import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <Router>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </Router>,
)
