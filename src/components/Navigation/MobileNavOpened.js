import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { NavLink } from 'react-router-dom';
import { background } from '../../media';

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
  background: linear-gradient(to top, #000 0%, #363333 50%, #363333 100%);

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
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})
const ModalImage = styled(ModalImagePose)`
  display: block;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// NAV LINKS
const ModalLinksPosed = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 50, opacity: 0 }
})
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
    }
    a:not(:nth-child(3)){
      border-bottom: 1px solid #707070;
    }
    div{
      position: absolute;
      bottom: -50px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px; height: 6px;
      background: #707070;
      display: block;
      margin: 0 auto;
      border-radius: 50%;
      border: 1px solid grey;
    }

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
          <NavLink to="/" onTouchEnd={openMobileMenu}>Home</NavLink>
          <NavLink to="/about" onTouchEnd={openMobileMenu}>About</NavLink>
          <a href="/">Facebook</a>
          <div></div>
        </ModalLinks>
      </Content>
    </MMenu>
  )
}

export default MobileNavOpened
