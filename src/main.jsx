import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import NavBar from './NavBar.jsx';
import '../dist/output.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
