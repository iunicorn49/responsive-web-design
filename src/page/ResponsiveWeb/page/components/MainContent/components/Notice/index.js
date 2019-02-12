import React, { Component } from "react";

class Notice extends Component {
  render() {
    return (
      <section className="notice">
        <a href="#">
          <span>2015-12-21</span>元旦期间业务受理及值班公告
        </a>
        <a href="#" className="more">
          更多公告
        </a>
      </section>
    );
  }
}

export default Notice;
