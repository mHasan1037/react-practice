import React from 'react';
import ReactDOM from 'react-dom/client';
import 'font-awesome/css/font-awesome.min.css'
import './index.css';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <DarkModeContextProvider>
         <App />
      </DarkModeContextProvider>
  </React.StrictMode>
);

