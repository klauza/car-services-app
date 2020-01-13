import React from 'react';
import { WrappedMap } from './Map';

const index = () => {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`} 
        loadingElement={<div style={{height: '100%'}}/>}
        containerElement={<div style={{height: '100%'}}/>}
        mapElement={<div style={{height: '100%'}}/>}
      />
    </div>
  )
}

export default index
