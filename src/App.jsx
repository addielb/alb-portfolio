import React from 'react';
import { createRoot } from 'react-dom';

import '../dist/output.css';

import NavBar from './NavBar.jsx';
import Welcome from './Welcome.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import SoftwareProjects from './SoftwareProjects.jsx';
import WorkHistory from './WorkHistory.jsx';
import Art from './Art.jsx';

function App() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-md-yellow to-lt-yellow text-dark-green">
      <NavBar />
      <Welcome />
      <About />
      <SoftwareProjects />
      <WorkHistory />
      <Art />
      <Contact />
      </div>
    </>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
