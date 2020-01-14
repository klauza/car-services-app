import React, {useState, useEffect} from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import { LogoBlack } from '../../media';
import styled from 'styled-components';

const LinkToGoogleMaps = styled.a`
  width: 100px;
  height: 40px;
  background: yellow;
  color: #fff;
  position: absolute;
  top: 0; left: 0;
`;
const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [userLocation, setUserLocation] = useState({lat: null, lng: null})

  useEffect(()=>{
    getLocation();
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

  console.log(userLocation)

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

      {(userLocation.lat && userLocation.lng) && 
        <Marker 
          position={{ lat: userLocation.lat, lng: userLocation.lng }}
        />
      }

      <div>
      <LinkToGoogleMaps href="https://www.google.com/maps/dir//52.3023435,-0.6955347/@52.3026524,-0.6926838,16.25z" target="_blank">Link</LinkToGoogleMaps>
      </div>
    </GoogleMap>
  )
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));

export default Map
