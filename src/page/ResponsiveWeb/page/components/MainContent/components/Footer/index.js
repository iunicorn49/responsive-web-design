import React, { Component } from "react";
import { data } from "./data";

class Footer extends Component {
  render() {
    return (
      <nav className="footer">
        <div className="footer-content">
          <p className="brand" />
          {data.map((ul, index) => (
            <ul key={index}>
              <li className="title">{ul.title}</li>
              {ul.list.map((c, cIndex) => (
                <li key={cIndex}>
                  <a href="#">{c}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </nav>
    );
  }
}

export default Footer;
