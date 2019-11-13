import React from 'react';
import ContentService from '../../services/ContentService';

import {ReactComponent as Icon1} from '../../assets/icon1.svg'
import {ReactComponent as Icon1White} from '../../assets/icon1-white.svg'

export default class Page2 extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    ContentService.getPageContent('https://voda-react-assessment.herokuapp.com/page')
      .then( data =>
        this.setState({
          data: data[0]
        })
      );
  }

  render() {
    return (
      <div className="container">
        <h1 className="page-heading">
          { this.state.data.description }
        </h1>
        <div className='fl-row'>
          <div>
            <div className='card'>
              <Icon1></Icon1>
              <Icon1White />
              Hello
            </div>
          </div>
          <div>
            <div className='card'>
              How are you?
            </div>
          </div>
          <div>
            <div className='card'>
              Are you well?
            </div>
          </div>
        </div>
      </div>
    );
  }
}