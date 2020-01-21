import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { WrappedMap } from '../Map/Map';

const MapWrapperPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
    transition: { duration: 500 }
  },
  closed: {  
    opacity: 0,
    transition: { duration: 500 }
  }
});
const MapWrapper = styled(MapWrapperPosed)`
  z-index: 10;
  position: fixed;
  top: 0px; bottom: 0px; left: 0px; right: 0px;
  background: rgba(0,0,0,.55);
  margin: 0 auto;
`;
const ContentPosed = posed.div({
  initialPose: 'closed',
  open: {
    y: 0,
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 50,
      delay: 200
    }
  },
  closed: {     
    y: 200,
    opacity: 0 
  }
});
const Content = styled(ContentPosed)`
  z-index: 11;
  position: fixed;
  top: 60px; bottom: 60px; left: 10px; right: 10px;
  background: linear-gradient(to bottom, #262626, #686868);
  border: 1px solid rgba(255,255,255,.5);
  padding: 5px;
  display: flex;
  flex-direction: row;

  @media(max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
  .map-image{
    flex: 5;
    width: 100%;
    height: auto;
  }

  .map-panel{
    flex: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__route{
      width: 100%;
      height: auto;
      text-align: center;
      padding: 35px 10px;
      @media(max-width: 768px){
        padding: 5px 10px;
      }
      p{
        color: #fff;
        margin: 7.5px;
        display: block;
      }
      a{
        font-size: 1.15rem;
        margin: 5px auto;
        display: block;
        width: 170px;
        line-height: 40px;
        background: #3b65ed;;
        color: #fff;
        text-decoration: none;    
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.95);
        &:hover{
          color: lightgrey;
        }
      }
    }

    &__button{
      padding: 5px;
      width: 200px;
      margin: 0 auto;
      background: #eb3131;
      color: #fff;
      font-size: 1.15rem;
      border: 0;
      box-shadow: 0 2px 1px -1px rgba(0,0,0,.95);
      cursor: pointer;
      font-family: 'Montserrat', sans-serif;
      &:hover{
        color: lightgrey;
      }
    }
  }
`;


const Map = ( {setOpenMapModal} ) => {

  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(()=>{
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    
    setIsOpen(false);
    setTimeout(()=>{
      setOpenMapModal(false);
    }, 500)
  }

  return (
    <MapWrapper pose={isOpen ? "open" : "closed"}>
      <Content>

        {/* MAP */}
        <div className="map-image">
            <WrappedMap 
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`} 
              loadingElement={<div style={{height: '100%'}}/>}
              containerElement={<div style={{height: '100%'}}/>}
              mapElement={<div style={{height: '100%'}}/>}
            />

        </div>

        {/* MAP PANEL */}
        <div className="map-panel">
          <div className="map-panel__route">
            <p>Go to Google Maps app and find the route to my facility:</p>
            <a href="https://www.google.com/maps/dir//52.3023435,-0.6955347/@52.3026524,-0.6926838,16.25z" target="_blank" rel="noopener noreferrer">Find route here</a>
          </div>

          <button className="map-panel__button" onClick={closeModal}>Close Map</button>
        </div>

      </Content>
    </MapWrapper>
  )
}

export default Map
