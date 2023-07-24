import React from 'react';
import logo from './logo.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="welcome-text">
        Welcome to Locatio Inc!
      </div>
      <div className="menu">
        <Link to="/" style={linkStyle}>
          <button>Home</button>
        </Link>
        <Link to="/properties" style={linkStyle}>
          <button>Properties</button>
        </Link>
        <Link to="/contact" style={linkStyle}>
          <button>Contact</button>
        </Link>
        <Link to="/reviews" style={linkStyle}>
          <button>Reviews</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
