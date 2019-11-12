import React from 'react';
import ContentService from '../../services/ContentService';

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
      </div>
    );
  }
}