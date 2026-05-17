
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './api/AuthContext'

import App from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/Dragon-Analytics">
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)