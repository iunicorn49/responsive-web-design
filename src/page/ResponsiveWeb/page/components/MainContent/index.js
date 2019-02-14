import React, { Component } from 'react';
import Transaction from './components/Transaction'
import Ad from './components/Ad'
import Feature from './components/Feature'
import Notice from './components/Notice'
import Product from './components/Product'
import Footer from './components/Footer'

import { product01, product02 } from './data'

class MainContent extends Component {
  render() {
    return (
      <div className="container">
        <Transaction />
        {/* <Ad /> */}
        <Feature />
        <Notice />
        <Product total={true} data={product01} />
        <Product data={product02} />
        <Footer />
      </div>
    );
  }
}

export default MainContent;