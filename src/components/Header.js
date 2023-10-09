import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import chLogo from "../assets/icons/ch-logo.png";

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <img src={chLogo} />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rides">Rides</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
