import React from 'react';
import Gallery from '../shared/Gallery';

export default function GallerySection( props ) {
  return(
    <div>
      <Gallery images={ props.data.images }></Gallery>
    </div>
  )
}