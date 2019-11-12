import React from 'react';

import '../../styles/Gallery.css';

export default function Gallery( props ) {

  return(
    <div className='gallery'> 
    {
        props.images.map( (image, i) => (
          <div className={'gallery__item gallery__item--' + i} key={i} style={ { backgroundImage: `url('${ image.img }')` } }>
            <span className='gallery__item-title'> {image.title} </span>
          </div>
        ))
    } 
    </div>
  )
}