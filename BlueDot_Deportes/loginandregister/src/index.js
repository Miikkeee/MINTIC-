import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Auth0Provider} from '@auth0/auth0-react'
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-80sws5wu6e5uc1s0.us.auth0.com' clientId='pTxpi1T1A1F1oVdHCCSeLOhdzwFsqXyT' redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
