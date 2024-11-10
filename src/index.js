import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-snipo7mrvybz2qyd.us.auth0.com';
const clientID = 'NMKFIODtUXbHXRph1ZeTPCttJGrp0o9a'; // Replace with your actual Client ID
const audience = 'https://dev-snipo7mrvybz2qyd.us.auth0.com/api/v2/'; // Use the Identifier of your custom API

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      redirectUri={window.location.origin}
      audience={audience} // Update audience here
      scope="read:userstate update:userstate"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
