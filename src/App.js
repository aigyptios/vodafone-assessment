import React from 'react';

import Home from './components/pages/Home';
import Page2 from './components/pages/Page2';
import Slider from './components/shared/Slider';
import Search from './components/shared/Search';

import { ReactComponent as MagnifyingGlass } from './assets/svg-magnifier.svg';

import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searching: false
    }
  }

  setSearch( searching ) {
    this.setState( { searching: searching } );
  }

  render() {  
    return (
      <div className={'App ' + ( this.state.searching ? 'no-scroll' : '')}>
        <Router>
          <header className='header'>
            <nav className='header__nav'>
              <ul className='header__nav-links'>
                <li className='header__nav-link-item'>
                  <NavLink className='header__nav-link' activeClassName='nav-link--active' to='/home'>Home</NavLink>
                </li>
                <li className='header__nav-link-item'>
                  <NavLink className='header__nav-link' activeClassName='nav-link--active' to='/page-2'>Page 2</NavLink>
                </li>
              </ul>
              <button className='btn-search' onClick={this.setSearch.bind(this, true)} >
                <MagnifyingGlass />
              </button>
            </nav>
            <Slider></Slider>
            <Search isShowing={ this.state.searching } onClose={ this.setSearch.bind(this, false) }></Search>
          </header>

          <Switch>
            <Route path='/page-2'>
              <Page2 />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
