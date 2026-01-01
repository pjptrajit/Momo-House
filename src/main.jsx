import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartProvider from './store/CartProvider.jsx'
import { Bounce, ToastContainer, } from 'react-toastify';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Auth0Provider
        domain="dev-h0kqe4muyn30hqdr.us.auth0.com"
        clientId="ycY6Ssnmzce2biAmXmzNvE7Wd3POo85X"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
        useRefreshTokens
        cacheLocation='localstorage'
      >
        <App />
      </Auth0Provider>
    </CartProvider>
  </BrowserRouter>
)
