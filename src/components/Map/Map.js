import React, {useState, useEffect} from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import { LogoBlack } from '../../media';

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(()=>{

  }, []); 

  return (
    <GoogleMap 
      defaultZoom={15}
      defaultCenter={{
        lat: 52.302898,
        lng: -0.693400 
      }}
    >
      
      <Marker 
        key={1} 
        position={{lat: 52.302898, lng: -0.693400}} 
        onClick={()=> setSelectedMarker(123)} 
        icon={{url: LogoBlack, scaledSize: new window.google.maps.Size(35, 35)}} 
      />

      {selectedMarker && (
        <InfoWindow position={{lat: 52.302898, lng: -0.693400}} onCloseClick={()=> setSelectedMarker(null)}>
          <div>Details</div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));

export default Map
