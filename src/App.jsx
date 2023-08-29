import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import '../dist/output.css';

import NavBar from './NavBar.jsx';
import Welcome from './Welcome.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />} />
      </Routes>
    </>
  )
}

export default App;

// ReactDOM.render(<App />, document.getElementById('root'));