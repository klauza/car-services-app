import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { NavLink } from 'react-router-dom';

// CONTAINER
const MMenuPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
  },
  closed: {  
    opacity: 0
  }
})
const MMenu = styled(MMenuPosed)`
  border-top: 2px solid black;
  position: fixed;
  top: 50px; bottom: 0px; left: 0px; right: 0px;
  display: grid; place-items: center;
  z-index: 999;
  background: #fff;
`;

//CHILRETN
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
  
  text-align: center;
  color: black;
`;

const MobileNavOpened = ({menuOpen, openMobileMenu}) => {

  const [isOpen, setIsOpen] = React.useState(false);


  React.useEffect(()=>{
    setIsOpen(true);
  }, []);

  if(!menuOpen && isOpen){
    setIsOpen(false);
  }

  return (
    <MMenu pose={isOpen ? "open" : "closed"}>
      <Content>
        
        <NavLink to="/" onTouchEnd={openMobileMenu}>Home</NavLink>
        <NavLink to="/about" onTouchEnd={openMobileMenu}>About</NavLink>
        <a href="/">Facebook</a>
        
      </Content>
    </MMenu>
  )
}

export default MobileNavOpened
