import React from 'react'
import ImageGallery from 'react-image-gallery';
import { isBrowser } from "react-device-detect";


const GalleryContainer = () => {

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return <ImageGallery autoPlay={true} showBullets={true} showFullscreenButton={isBrowser ? true : false} items={images} />;
  
}

export default GalleryContainer
