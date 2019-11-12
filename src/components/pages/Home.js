import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import ContentService from '../../services/ContentService';

import GallerySection from '../sections/GallerySection';

export default class Home extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {};
  }

  componentDidMount() {
    ContentService.getPageContent('https://voda-react-assessment.herokuapp.com/home')
      .then( data =>
        this.setState({
          data: data[0]
        })
      );
  }

  render() {
    if ( this.state.data ) {
      return (
        <div className="container">
          <h1 className="page-heading">{ this.state.data.description }</h1>
          <nav className="home-nav">
            <ul className="home-nav__links">
              <li className="home-nav__links-item">
                <Link to={`/`}>Section 1</Link>
              </li>
              <li className="home-nav__links-item">
                <Link to={`/section-2`}>Section 2</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path={`/section-2`}>
              {/* <Section2 /> */} Graph and form go here
            </Route>
            <Route path={'/'}>
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