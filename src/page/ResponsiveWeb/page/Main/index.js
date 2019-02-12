import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <MainContent />
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
