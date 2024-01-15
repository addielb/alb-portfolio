import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX} from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  const screenWidth = screen.width;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [])
  return (
    <div className={`${screenWidth < 640 ? "mx-5 p-5" : "mx-10 p-10 sticky bg-gradient-to-r from-md-yellow to-lt-yellow"} top-0 z-50`}>
      {screenWidth < 640 &&
        <div className="float-right justify-end pb-0.5">
          {isOpen ? <FontAwesomeIcon icon={faX} onClick={() => setIsOpen(false)}/> : <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(true)}/>}
        </div>
      }
      <a to='/'>
        <h1 className={`${screenWidth >= 640 ? "text-7xl" : "text-3xl self-center justify-center items-center content-center text-center"} mb-4 font-extrabold leading-none tracking-tight text-dark-green dark:text-white pt-10`}>
          Addie Lopshire-Bratt
        </h1>
      </a>
      {screenWidth >= 640 &&
        <nav className="flex max-w-full content-start items-center justify-between flex-wrap text-xl text-dark-green border-b-4 border-dark-green">
          <a href="#about">About</a>
          <a href="#software">Software Projects</a>
          <a href="#work">Work History</a>
          <a href="#art">Art</a>
          <a href="#contact">Contact</a>
        </nav>
      }
      {isOpen &&
        <div className="min-h-screen flex flex-col">
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
        </div>
      }
    </div>
  )
}

export default NavBar;

{/* <nav className="flex max-w-full content-start items-center justify-between flex-wrap text-xl text-dark-green border-b-4 border-dark-green">
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
      </nav> */}