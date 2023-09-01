import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import '../dist/output.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-yellow-100">
      <NavBar />
      <App />
      {/* <Footer /> */}
    </div>
    </BrowserRouter>
  </React.StrictMode>
)
