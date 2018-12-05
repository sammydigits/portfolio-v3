import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <h1>Sam Thompson</h1>
        <h2>Frontend Web Developer</h2>
        <div className="nav-line">
          <ul>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
