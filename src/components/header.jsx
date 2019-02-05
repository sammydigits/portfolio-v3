import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <h1>Sam Thompson</h1>
        <h2>Full Stack Web Developer</h2>
        <div className="nav-line">
          <ul>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
