import React, { Component } from "react";

import { lis } from "./data";

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
          {lis.map((li, index) => (
            <li key={index}>
              <span className={`icon icon-${li.icon}`}>{li.name}</span>
            </li>
          ))}
        </ul>
        <p>北京某互联网金融公司 版权所有 ©2015-2016</p>
      </footer>
    );
  }
}

export default Footer;
