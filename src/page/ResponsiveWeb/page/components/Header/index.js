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
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">理财频道</a></li>
            <li><a href="#">投资频道</a></li>
            <li><a href="#">新手专区</a></li>
            <li><a href="#">安全保障</a></li>
        </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
