import React, {useState, useEffect} from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import { LogoBlack } from '../../media';


const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [userLocation, setUserLocation] = useState({lat: null, lng: null})

  useEffect(()=>{
    // getLocation();
    // eslint-disable-next-line
  }, []); 

  const getCords = (position) => {
    console.log(position);
    setUserLocation(prevState => ({...prevState, lat: position.coords.latitude, lng: position.coords.longitude}))
  }

  const getLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(getCords, handleErrors)
    } else{
      alert("geolocation not supported")
    }
  }

  const handleErrors = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
        break
    }
  }

  // console.log(userLocation)

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
          <div>We are here</div>
        </InfoWindow>
      )}

      {(userLocation.lat && userLocation.lng) && 
        <Marker 
          position={{ lat: userLocation.lat, lng: userLocation.lng }}
        />
      }


    </GoogleMap>
  )
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));

export default Map
