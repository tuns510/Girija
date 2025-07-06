import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <div className="Nlogo">
        <Link to='/'><img src={assets.logo} alt="" /></Link>
        <Link to='/'><h2>GIRIJA FOUNDATION </h2></Link>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to='/about' onClick={closeMenu}>About Us</Link></li>
        <li><Link to='/donate-now' onClick={closeMenu}><button className="donate-btn">Donate now</button></Link></li>
      </ul>

    </div>
  )
}

export default Navbar
