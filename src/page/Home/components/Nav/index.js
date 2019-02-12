import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/media">媒体查询</Link>
        <Link to="/responsive-web">responsive-web</Link>
      </div>
    );
  }
}

export default Nav;
