import React from "react";
import NavbarCustom from "../Navbar";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="name p-2">
              <h1>SAMUEL O. AFRIYIE</h1>
            </div>
          </div>
          <div className="row">
            <div className="about">
              <p>Web Developer & Cinematography</p>
            </div>
          </div>
        </div>
        <NavbarCustom/>
      </div>

    )
  }
}
export default Header;
