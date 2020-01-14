import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { NavLink } from 'react-router-dom';
import { background } from '../../media';
import { Home, Facebook } from '../../Icons';

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
  z-index: 999;
  background: linear-gradient(to top, rgba(0,0,0,1) 0%, #363333 50%, #363333 100%);

`;
//CHILRETN
const ContentPosed = posed.div({
  initialPose: 'closed',
  open: {
    y: 0,
    opacity: 1,
    delayChildren: 200, 
    staggerChildren: 50
  },
  closed: {     
    y: 400,
    opacity: 0 
  }
})
const Content = styled(ContentPosed)`
  display: grid; 
  text-align: center;
  color: black;
`;
// MODAL IMAGE
const ModalImagePose = posed.div({
  open: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 100,
      delay: 100
    }
  },
  closed: {
     y: 20, 
     opacity: 0
  }
})
const ModalImage = styled(ModalImagePose)`
  display: block;
  width: 100%;
  max-height: 30vh;
  height: 100%;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// NAV LINKS
const ModalLinksPosed = posed.div({
  open: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 100,
      delay: 200
    }
  },
  closed: {
     y: 20, 
     opacity: 0
  }
});
const ModalLinks = styled(ModalLinksPosed)`
    z-index: 2;
    width: 80%;
    margin: -30px auto 0;
    box-shadow: 0 2px 2px 1px rgba(0,0,0,.5);
    position: relative;
    display: flex; flex-direction: column;
    
    a{
      font-size: 1.65em;
      color: #fff;
      text-decoration: none;
      background: #545454;
      line-height: 50px;
      
      display: flex; flex-direction: row;
    }
    svg{
      margin: 5px;
      width: 40px; height: 40px;
    }
    a:not(:nth-child(3)){
      border-bottom: 1px solid #707070;
    }


`;
const DotPosed = posed.div({
  open: { 
    y: 0, 
    opacity: 1,
    transition: { 
      delay: 400
    }
  },
  closed: {
     y: 20, 
     opacity: 0
  }
})
const Dot = styled(DotPosed)`
  width: 6px; height: 6px;
  background: #707070;
  display: block;
  margin: 25px auto 0;
  border-radius: 50%;
  border: 1px solid grey;
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
        <ModalImage><img src={background} alt=""/></ModalImage>

        <ModalLinks>
          <NavLink to="/" onTouchEnd={openMobileMenu}> <Home/> <span>Home</span> </NavLink>
          <NavLink to="/about-website" onTouchEnd={openMobileMenu}> <span>About</span></NavLink>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><Facebook/> <span>Facebook</span> </a>
          
        </ModalLinks>
        <Dot />
      </Content>
    </MMenu>
  )
}

export default MobileNavOpened
