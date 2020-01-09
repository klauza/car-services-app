import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { pugImage } from '../../media';

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
    delayChildren: 500, 
    staggerChildren: 50
  },
  closed: {     
    y: 400,
    opacity: 0 
  }
});
const Content = styled(ContentPosed)`
  z-index: 11;
  position: fixed;
  top: 60px; bottom: 60px; left: 10px; right: 10px;
  background: lightgoldenrodyellow;
  border: 1px solid red;
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
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .map-panel{
    flex: 2;
    height: 100%;

    &__controller{
      border: 1px solid #fff;
      width: 200px;
      height: auto;
      background: black;
      span{
        display: block;
      }
      button{

      }
    }

    &_button{
      /* position: absolute; */
      /* bottom: 0px; left: 50%; transform: translateX(-50%); */
      /* margin-top: 25px; */
      padding: 5px 15px;
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
        <div className="map-image"><img src={pugImage} alt=""/></div>
        <div className="map-panel">
          <div className="map-panel__controller">
            <span>Find the route</span>
            <button>Submit</button>
          </div>
          <button className="map-panel__button" onClick={closeModal}>Close</button>
        </div>
      </Content>
    </MapWrapper>
  )
}

export default Map
