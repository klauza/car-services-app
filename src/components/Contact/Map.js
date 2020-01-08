import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

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
})
const MapWrapper = styled(MapWrapperPosed)`
  position: fixed;
  top: 0px; bottom: 0px; left: 0px; right: 0px;
  background: rgba(0,0,0,.55);
  z-index: 110;
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
})
const Content = styled(ContentPosed)`
  position: fixed;
  top: 60px; bottom: 60px; left: 10px; right: 10px;
  background: lightgoldenrodyellow;
  border: 1px solid red;
`;

const Map = ({setOpenMapModal}) => {

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
        <h2>Map</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem.</p>
        <button onClick={closeModal}>Close</button>
      </Content>
    </MapWrapper>
  )
}

export default Map
