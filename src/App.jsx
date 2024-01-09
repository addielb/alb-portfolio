import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import '../dist/output.css';

import Welcome from './Welcome.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import SoftwareProjects from './SoftwareProjects.jsx';
import WorkHistory from './WorkHistory.jsx';
import Art from './Art.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/about' element={<About />} />
        <Route path='/art' element={<Art />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/software' element={<SoftwareProjects />} />
        <Route path='/history' element={<WorkHistory />} />
      </Routes>
    </>
  )
}

export default App;

// ReactDOM.render(<App />, document.getElementById('root'));