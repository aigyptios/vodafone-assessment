import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import ContentService from '../../services/ContentService';

import GallerySection from '../sections/GallerySection';
import InformationSection from '../sections/InformationSection';

export default class Home extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {};
  }

  componentDidMount() {
    ContentService.getPageContent( this.props.resourceURI )
      .then( data =>
        this.setState({
          data: data[0]
        })
      );
  }

  render() {
    if ( this.state.data ) {
      return (
        <div className='container'>
          <h1 className='page-heading'>{ this.state.data.description }</h1>
          <nav className='home-nav'>
            <ul className='home-nav__links'>
              <li className='home-nav__links-item'>
                <NavLink activeClassName='nav-link--active' exact to={`/home`}>Section 1</NavLink>
              </li>
              <li className='home-nav__links-item'>
                <NavLink activeClassName='nav-link--active' to={`/home/section-2`}>Section 2</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path={`/home/section-2`}>
              <InformationSection data={this.state.data.sections[1]}/>
            </Route>
            <Route path={'/home'}>
              <GallerySection data={this.state.data.sections[0]}></GallerySection>
            </Route>
          </Switch>
        </div>
      );;
    } else {
      return <div></div>
    }
  }
}