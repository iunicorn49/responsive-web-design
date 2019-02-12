import React, { Component } from 'react';

class Transaction extends Component {
  render() {
    return (
      <div className="transaction">
        <div className="trans-content">
          <div className="trans-data">
            <span>平台累积成交金额</span>
            <span className="trans-money">19888</span>
            <span>万元</span>
          </div>
          <div className="trans-data">
            <span>过去7日成交金额</span>
            <span className="trans-money">1888</span>
            <span>万元</span>
          </div>
          <div className="trans-report">
            <a href="#">查看平台运营报告</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Transaction;