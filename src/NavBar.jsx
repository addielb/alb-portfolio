import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX} from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  const screenWidth = screen.width;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [])
  return (
    <div className={`${screenWidth < 640 ? "navBarMobile" : "navBarDesktop"} navBar`}>
      {screenWidth < 640 &&
        <div className="mobileMenuIcon">
          {isOpen ? <FontAwesomeIcon icon={faX} onClick={() => setIsOpen(false)}/> : <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(true)}/>}
        </div>
      }
      <a href="">
        <h1 className={`${screenWidth >= 640 ? "nameTitleDesktop" : "nameTitleMobile"} nameTitle`}>
          Addie Lopshire-Bratt
        </h1>
      </a>
      {screenWidth >= 640 &&
        <nav className="navBarOptions">
          <a href="#about">About</a>
          <a href="#software">Software Projects</a>
          <a href="#work">Work History</a>
          <a href="#art">Art</a>
          <a href="#contact">Contact</a>
        </nav>
      }
      {isOpen &&
        <div className="navMenuMobile">
          <a href="#about">About</a>
          <a href="#software">Software Projects</a>
          <a href="#work">Work History</a>
          <a href="#art">Art</a>
          <a href="#contact">Contact</a>
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