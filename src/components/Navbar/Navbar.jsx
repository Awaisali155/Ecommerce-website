import React from "react";
import "../Navbar/Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <span>E-commerce</span>
        <span>
          <Toggle />
        </span>
      </div>
      <div className="n-right">
        <ul>
          <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
            <li>Home</li>
          </Link>
          <Link spy={true} to="Services" smooth={true}>
            <li>Services</li>
          </Link>
          <Link spy={true} to="Experience" smooth={true}>
            <li>Experience</li>
          </Link>
          <Link spy={true} to="Portfolio" smooth={true}>
            <li>Portfolio</li>
          </Link>
          <Link spy={true} to="Testimonial" smooth={true}>
            <li>Testimonial</li>
          </Link>
        </ul>
        <button className="button">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
