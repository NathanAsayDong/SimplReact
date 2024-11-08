import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AppDataProvider } from './services/Classes/dataContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppDataProvider>
        <App />
    </AppDataProvider>
  </React.StrictMode>,
);
