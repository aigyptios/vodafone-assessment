import React from 'react';
import ContentService from '../../services/ContentService';

export default class Page extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {}
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
          <h1 className='page-heading'>
            { this.state.data.description }
          </h1>
          <div className='fl-row'>
            {
              this.state.data.tiles.map( (tile, i) => (
                <div key={i}>
                  <div className='tile'>
                    <i className={ 'tile__icon ' + tile.icon } />
                    <span className='tile__title'>{ tile.title }</span>
                    <span className='tile__description'>{ tile.description }</span>
                    <span className='tile__link'>{ tile.link }</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}