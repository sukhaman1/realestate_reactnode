import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from "@react-oauth/google"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId='619196204067-c1i8n3suf3ve6b7t6f56uef4ro0j9eh9.apps.googleusercontent.com'>
      <App />
  </GoogleOAuthProvider>
);
reportWebVitals();
