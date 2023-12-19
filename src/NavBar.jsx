import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  const screenWidth = screen.width;
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-100 mx-10 p-10 sticky top-0 z-50">
      <Link to='/'>
        <h1 className="mb-4 lg:text-8xl md:text-6xl sm:text-6xl font-extrabold leading-none tracking-tight text-dark-green dark:text-white pt-10">
          Addie Lopshire-Bratt
        </h1>
      </Link>
      {screenWidth >= 640 && <nav className="flex max-w-full content-start items-center justify-between flex-wrap text-xl text-dark-green border-b-4 border-dark-green">
        <Link to='/about'>
          <button>About</button>
        </Link>
        <Link to='/software'>
          <button>Software Projects</button>
        </Link>
        <Link to='/history'>
          <button>Work History</button>
        </Link>
        <Link to='/art'>
          <button>Art</button>
        </Link>
        <Link to='/contact'>
          <button>Contact</button>
        </Link>
      </nav>}
      {screenWidth < 640 && <FontAwesomeIcon className="float-right align-items-center" icon={faBars} />}
    </div>
  )
}

export default NavBar;