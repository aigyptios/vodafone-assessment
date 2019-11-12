import React from 'react';

import '../../styles/Slider.css';
import ContentService from '../../services/ContentService';

export default class Slider extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      activeImageIndex: 0,
      data: []
    }
    this.goToSlide = this.goToSlide.bind(this);
    this.intervalId = undefined;
  }

  componentDidMount() {
    ContentService.getPageContent('https://voda-react-assessment.herokuapp.com/slider')
      .then( data =>
        this.setState({
          data: data
        })
      );
      
      this.autoPlay();
  }

  autoPlay() {
    this.intervalId = window.setInterval( () => {
      this.setState({ activeImageIndex: (this.state.activeImageIndex + 1 ) % this.state.data.length })
    } , 3000);
  }

  goToSlide( index ) {
    window.clearInterval( this.intervalId );
    this.setState( { activeImageIndex: index } );
    this.autoPlay();
  }

  render() {
    return (
      <div className='slider'>
        { this.state.data.map( (slide, i) => (
          <div key={i} className={ 'slider__item ' + (this.state.activeImageIndex === i ? 'slider__item--active' : '')} style={ { background: `#404859 url('${slide.image}') center / cover`} }>
            <span className='slider__slide-title'>{ slide.title }</span>
            <span className='slider__slide-subtitle'>{ slide.subtitle }</span>
          </div>
        ))}
        <div className='slider__indicator'>
        { this.state.data.map( (slide, i) => (
          <div onClick={ this.goToSlide.bind(undefined, i) } key={i} className={'slider__indicator-location ' + (this.state.activeImageIndex === i ? 'slider__indicator-location--active' : '')}></div>
        ))}
        </div>
      </div>
    );
  }
}