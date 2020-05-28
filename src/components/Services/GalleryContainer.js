import React from 'react'
import ImageGallery from 'react-image-gallery';
import { isBrowser } from "react-device-detect";


const GalleryContainer = ({images}) => {



  return <ImageGallery autoPlay={true} showBullets={true} showFullscreenButton={isBrowser ? true : false} items={images} />;
  
}

export default GalleryContainer
