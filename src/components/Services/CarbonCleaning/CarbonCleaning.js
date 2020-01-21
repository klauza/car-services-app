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

const CarbonCleaning = () => {
  return (
    <React.Fragment>
      <Hero />
      <Wrapper>
        
        <MobileView>
          <BackButton>Back icon</BackButton>
        </MobileView>

        <Header>Carbon cleaning</Header>
        <About>
          <Home/>
          <p>HHO carbon cleaner 6.0 consumes water by electrolysis, into its components; pure hydrogen and oxygen gases. This gas mixture is now commonly referred to as HHO. With the engine idling, HHO with cleaner agent are simply fed into the combustion chamber via the air intake where it burns, along with the fuel, to reform water vapour. The combination of hydrogen and oxygen enrichment create conditions for carbon to be gently burned off from piston crowns, valves and other components to form carbon dioxide and water vapour. In addition, the water vapour that is formed cannot condense due to the high temperature. So it effectively steam cleans the combustion chamber and associated components from the inside without any dismantling. The carbon deposits are progressively removed and pass out through the exhaust pipe. In the other hand, carbon cleaner keeps cleaning from entering into air intake to the exhaust pipe, what’s more, it forms a protective film to attached to engine parts. For a car engine the process is complete in just 20 minutes.</p>
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

export default CarbonCleaning
