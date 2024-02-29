import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../cssfiles/navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='maindiv'>
      <div className='mylogo'>
        <Link to='/aboutme'>
          <p className='myname'>Rishabh</p>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className='mobile-menu-button' onClick={toggleMobileMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      {/* Navigation Links */}
      <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul className='nav-items'>
          <li className='nav-item-list'>
            <Link to='/aboutme' onClick={toggleMobileMenu}>
              About Me
            </Link>
          </li>
          <li className='nav-item-list'>
            <Link to='/projects' onClick={toggleMobileMenu}>
              Projects
            </Link>
          </li>
          <li className='nav-item-list'>
            <Link to='/certificates' onClick={toggleMobileMenu}>
              Certificates
            </Link>
          </li>
          <li className='nav-item-list'>
            <Link to='/contactme' onClick={toggleMobileMenu}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
