import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './components/App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-snipo7mrvybz2qyd.us.auth0.com';
const clientID = 'NMKFIODtUXbHXRph1ZeTPCttJGrp0o9a'; // Replace with your actual Client ID
const audience = 'https://dev-snipo7mrvybz2qyd.us.auth0.com/api/v2/'; // Use the Identifier of your custom API
=======
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
>>>>>>> bdeb88a (Initialize project using Create React App)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
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
=======
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> bdeb88a (Initialize project using Create React App)
