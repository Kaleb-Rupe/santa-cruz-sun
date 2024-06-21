import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.JPG";
import "./Header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header id="masthead" className="site-header">
        <div className="header-content">
          <div className="header-logo">
            <a href="/" id="logo" onclick="document.location=/home'.html';return false;" 
            // onClick={(e) => e.preventDefault()} 
            // gotta figure out how to implement this^^ while keeping my original onClick that return to home on logo click
            >
              <img src={Logo} alt="logo" />
            </a>
            <h1 className="site-title">Santa Cruz Sun LLC, CCB#249418</h1>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${menuOpen ? "open" : ""}`}></div>
            <div className={`hamburger ${menuOpen ? "open" : ""}`}></div>
            <div className={`hamburger ${menuOpen ? "open" : ""}`}></div>
          </div>
        </div>
        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
