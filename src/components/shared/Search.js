import React from 'react';

import '../../styles/Search.css';

export default class Home extends React.Component {

  render() {
    return (
      <div className={'search-overlay ' + (!this.props.isShowing ? 'search-overlay--hidden' : '')}>
        <button className='btn-close' onClick={this.props.onClose}>Close</button>
      </div>
    )
  }

}