import React, { Component } from "react";
import "./style/index.scss";
import { Route, Switch } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login";

class ResponsiveWeb extends Component {
  render() {
    const {
      match: { url }
    } = this.props;
    return (
      <Switch>
        <Route path={url} exact component={Main} />
        <Route path={url + "/login"} component={Login} />
      </Switch>
    );
  }
}

export default ResponsiveWeb;
