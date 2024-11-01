import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
     <BrowserRouter>
     <Auth0Provider
    domain="dev-oxiqdrgcsjpaa7g1.us.auth0.com"
    clientId="DcH1s4cB9oPriogna1ao76wMVqEJONoK"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
     
     </BrowserRouter>
    
  
)
