import React from 'react';
import { NavLink } from 'react-router-dom';


import '../../styles/Search.css';

export default class Home extends React.Component {

  constructor( props ){
    super( props );
    // I was going to make this a tree structure but did not have time
    this.routes = [
      { 
        title: 'Homepage',
        component: <NavLink onClick={ this.props.onClose } className='search__results-item' key={'Homepage'} to='/home'>Homepage</NavLink>
      },{
        title: 'All',
        component: <NavLink onClick={ this.props.onClose } className='search__results-item' key={'All'} to='/home' style={{ marginLeft: 15}}>All</NavLink>
      },{
        title: 'Section 1',
        component: <NavLink onClick={ this.props.onClose } className='search__results-item' key={'Section 1'} to='/home' style={{ marginLeft: 15}}>Section 1</NavLink>
      },{
        title: 'Section 2',
        component: <NavLink onClick={ this.props.onClose } className='search__results-item' key={'Section 2'} to='/home/section-2' style={{ marginLeft: 15}}>Section 2</NavLink>
      },{
        title: 'Page 2',
        component: <NavLink onClick={ this.props.onClose } className='search__results-item' key={'Page 2'} to='/page-2' >Page 2</NavLink>
      }
    ];
    this.state = {};
  }

  componentDidMount() {
    this.setResults();
  }

  setResults( event ) {
    let query = !event ? '' : event.target.value.toLowerCase();
    let results = [];
    this.routes.forEach( route => {
        if ( route.title.toLowerCase().indexOf( query ) >= 0 ) {
          results.push( route.component );
        }
    });
    this.setState( { results: results });
  }

  render() {
    return (
      <div className={'search__overlay ' + (!this.props.isShowing ? 'search__overlay--hidden' : '')}>
        <button className='search__btn-close' onClick={this.props.onClose}>Close</button>
        <div className='search__box'>
          <div className='search__input-wrapper'>
            {/* I could've made this a controlled component but didn't feel like it */}
            <input className='search__input' onChange={ this.setResults.bind(this) } />
            <button className='search__btn-submit' onClick={this.props.onClose}>Submit</button>
          </div>
          <div className='search__results'>
            { this.state.results }
          </div>
        </div>
      </div>
    )
  }

}