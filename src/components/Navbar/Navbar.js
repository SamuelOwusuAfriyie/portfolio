import React from "react";
import "./Navbar.css"
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";

let NavbarCustom = () => (
  <div className="bottom">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Bliza Samuel</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav m-auto">
          <a className="nav-item nav-link active px-5" href="#">Home
            <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link px-5" href="#">Contact</a>
          <a className="nav-item nav-link px-5" href="#">Blog</a>
        </div>
      </div>
    </nav>
  </div>
)

export default NavbarCustom;
