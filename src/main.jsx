import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './utils/Context/ThemeProvider';
import { SearchProvider } from './utils/Context/SearchProvider';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <SearchProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </SearchProvider>
    </ThemeProvider>
  </React.StrictMode>
)
