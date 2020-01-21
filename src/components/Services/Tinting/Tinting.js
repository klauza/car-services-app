import React from 'react';
import Hero from './Hero';
import styled from 'styled-components';
import GalleryContainer from '../GalleryContainer';
import { Home } from '../../../Icons';
import { MobileView, BrowserView } from "react-device-detect";

const Wrapper = styled.div`

  padding-bottom: 150px;
  max-width: 1280px;
  width: 100%;
  margin: 0px auto;
  @media(max-width: 1280px){
    margin: 0 25px;
  }
  @media(max-width: 768px){
    width: auto;
    margin: 0 15px;
  }
`;

const Header = styled.h1`
  margin: -50px auto 50px;
  padding-bottom: 50px;
  text-align: center;
  transform: rotateZ(-5deg);
  font-size: 3.5em;
  color: #fff;
  &::after{
    content:'';
    display: block;
    width: 250px;
    height: 2px;
    background-color: #fff;
    margin: 0 auto;
    transform: translateX(50px);
  }
`;

const About = styled.div`
  background: linear-gradient(to right, #5A5A5A, #5A5A5A, rgba(0,0,0,0));
  color: #fff;
  width: auto; 
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 3px;
  position: relative;
  svg{
    position: absolute;
    top: -10px; left: -10px;
    width: 25px;
    fill: #fff;
  }

  @media(max-width: 768px){
    margin-top: 50px;
  }

  p{
    padding: 20px;
  }
`;

const HeaderGallery = styled.div`
  background: linear-gradient(to right, #5A5A5A, #5A5A5A, rgba(0,0,0,0));
  color: #fff;
  display: block;
  margin: 50px auto 0;
  width: auto;
  text-align: center;
  position: relative;
  svg{
    position: absolute;
    top: -10px; left: -10px;
    width: 25px;
    fill: #fff;
  }
`;
const Pricing = styled.div`
  width: auto;
  height: 20vh;
  background: #000;
  position: relative;
  margin-top: 50px;
  color: #fff;
  text-align: center;
  svg{
    position: absolute;
    top: -10px; left: -10px;
    width: 25px;
    fill: #fff;
  }
`;
const BackButton = styled.button`
  position: fixed;
  top: 50px; left: 0;
`;

const Tinting = () => {
  return (
    <React.Fragment>
      <Hero />
      <Wrapper>
        
        <MobileView>
          <BackButton>Back icon</BackButton>
        </MobileView>

        <Header>Tinting</Header>
        <About>
          <Home/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga, eligendi accusantium expedita ipsa doloremque molestiae officia omnis eum unde.</p>
        </About>
        <HeaderGallery>
          <Home/>
          <h1>Gallery of</h1>
          <h2>Work Preview</h2>
        </HeaderGallery>

        <GalleryContainer />

        <Pricing>
          <Home/>
          <h1>Pricing</h1>
        </Pricing>

        <BrowserView>
          <button>Back to services</button>
        </BrowserView>
        
      </Wrapper>
    </React.Fragment>

  )
}

export default Tinting
