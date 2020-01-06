import React from 'react';
import styled from 'styled-components';
import ScreenNav from './ScreenNav';
import MobileNav from './MobileNav';

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  background: #363333;
  color: #fff;
  box-shadow: 0 2px 3px -1px rgba(0,0,0,.6);
  
`;


const Navbar = () => {
  return (
    <Wrapper>

      <ScreenNav />
      <MobileNav />

    </Wrapper>
  )
}

export default Navbar
