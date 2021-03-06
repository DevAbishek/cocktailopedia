import React, { useState } from 'react'
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className={toggle ? 'navbar expanded' : 'navbar'}>
      <h2 className='logo'>Cocktailopedia</h2>
      <div className='toggle-icon' onClick={handleToggle}>
        {toggle ? <FaWindowClose /> : <FaBars />}

      </div>
      <ul className='links'>
        <li><Link to="/" onClick={handleToggle}>Cocktail 4 You</Link></li>
        <li><Link to="/cocktailsearch" onClick={handleToggle}>Search a Cocktail</Link></li>
      </ul>
    </nav>
  )
}
