import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './page/Home'
import Media from './page/Media'
import ResponsiveWeb from './page/ResponsiveWeb'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/media" component={Media} />
            <Route path="/responsive-web" component={ResponsiveWeb} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
