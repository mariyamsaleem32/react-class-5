import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProvider from '../src/context/context';
import {BrowserRouter} from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider>
        <App />
    </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
