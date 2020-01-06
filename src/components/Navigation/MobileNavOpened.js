import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

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

const MobileNavOpened = ({menuOpen}) => {

  const [isOpen, setIsOpen] = React.useState(false);


  React.useEffect(()=>{
    setIsOpen(true);
  }, []);

  if(!menuOpen && isOpen){
    setIsOpen(false);
  }
  console.log('is menu open: ', menuOpen);
  return (
    <MMenu pose={isOpen ? "open" : "closed"}>
      <Content>
        
        <li>li item-2</li>
        <li>li item-3</li>
        <li>li item-4</li>
        <li>li item-5</li>
        <li>li item-6</li>
        <li>li item-7</li>
        <li>li item-8</li>
        <li>li item-9</li>
        <li>li item-10</li>
        
      </Content>
    </MMenu>
  )
}

export default MobileNavOpened
