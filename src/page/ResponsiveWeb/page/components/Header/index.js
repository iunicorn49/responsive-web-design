import React, { Component } from "react";
import { listBtn } from "./data";
import logoImg from '../../image/logo@1x.png'

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="top">
          <span className="tel">理财热线: 400-888-8888</span>
          <ul>
            {listBtn.map((li, index) => (
              <li key={index}>
                <a href="#">{li.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="main">
          <a href="#" className="brand">
            <img
              alt="回到首页"
              src={logoImg}
            />
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
