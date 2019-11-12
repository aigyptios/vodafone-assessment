import React from 'react';

import Home from './components/pages/Home';
import Page2 from './components/pages/Page2';
import Slider from './components/shared/Slider';

import { ReactComponent as MagnifyingGlass } from './assets/svg-magnifier.svg';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  render() {  
    return (
      <Router>
        <header className="header">
          <nav className="header__nav">
            <ul className="header__nav-links">
              <li className="header__nav-link-item"><Link to="/">Home</Link></li>
              <li className="header__nav-link-item"><Link to="/Page2">Page 2</Link></li>
            </ul>
            <button className="btn-search">
              <MagnifyingGlass />
            </button>
          </nav>
          <Slider ></Slider>
        </header>

        <Switch>
          <Route path="/Page2">
            <Page2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
