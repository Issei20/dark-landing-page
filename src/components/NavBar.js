import React from "react";
import './styles/navBar.css';
import logoFily from "./images/logo.svg"

function NavBar() {
  return (
    <nav className="nav-container">
    <img className="logoNav" src={logoFily} alt="logo-file"></img>
    <ul className="nav-list">
      <li>Features</li>
      <li>Team</li>
      <li>Sign in</li>
    </ul>
    </nav>
  );
}

export default NavBar;
