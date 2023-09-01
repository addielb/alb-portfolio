import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-100 mx-10 p-10 sticky top-0">
      <Link to='/'>
        <h1 className="mb-4 text-8xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pt-10">
          Addie Lopshire-Bratt
        </h1>
      </Link>
      <nav className="flex max-w-full content-start items-center justify-between flex-wrap text-xl border-b-4 border-black">
        <Link to='/about'>
          <button className="mr-20">About</button>
        </Link>
        <Link to='/software'>
          <button className="mr-20">Software Projects</button>
        </Link>
        <Link to='/history'>
          <button className="mr-20">Work History</button>
        </Link>
        <Link to='/art'>
          <button className="mr-20">Art</button>
        </Link>
        <Link to='/contact'>
          <button>Contact</button>
        </Link>
      </nav>
    </div>
  )
}

export default NavBar;