import React from 'react';
import Hero from './Hero';
import styled from 'styled-components';
import posed from 'react-pose';
import GalleryContainer from '../GalleryContainer';
import { Check, HelpWebButton, Reply, Camera, PoundSterling } from '../../../Icons';
import { carbonCleanImage } from '../../../media';
import { MobileView, BrowserView } from "react-device-detect";
import { NavLink } from 'react-router-dom';
import history from '../../../history';

const ContainerPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
  },
  closed: {     
    opacity: 0
  }
});
const Container = styled(ContainerPosed)``;
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

  a{
    color: white;
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
  &>svg{
    position: absolute;
    top: -12.5px; left: -12.5px;
    width: 30px; height: auto;
    fill: #fff;
  }
  &>svg, &>path, &>circle{
    fill: #fff!important;
  }

  .check-container{
    display: grid;
    grid-template-columns: auto auto;
    grid-auto-rows: minmax(295px, 1fr);
    padding: 20px;
    align-items: center;
    @media(max-width: 1125px){
      grid-template-columns: 1fr;
      grid-auto-rows: minmax(250px, 1fr);
      padding: 2.5px;
    }
    img{
      max-width: 650px;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    .check-column{
      padding: 5px;
      display: flex; flex-direction: column;
      svg{
        width: 25px; height: auto;
      }
      span{
        @media(max-width: 768px){
          font-size: 0.75em;
        }
      }
    }
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
    top: -12.5px; left: -12.5px;
    width: 30px; height: auto;
    fill: #fff;

  }
`;
const Pricing = styled.div`
  width: auto;
  height: auto;
  position: relative;
  margin-top: 50px;
  color: #fff;
  text-align: center;
  padding-bottom: 20px;
  h1{
    border-radius: 3px;
    /* background: #000; */
    background: linear-gradient(to right, #000, #000, rgba(0,0,0,0));
    color: #fff;
    margin-bottom: 10px;
  }
  svg{
    position: absolute;
    top: -12.5px; left: -12.5px;
    width: 30px; height: auto;
    fill: #fff;
  }
  p{
    border-radius: 3px;
    /* background: #5A5A5A; */
    background: linear-gradient(to right, #5A5A5A, #5A5A5A, rgba(0,0,0,0));
    padding: 30px 5px;
    margin: 5px 0;
  }
`;
const BackButton = styled.button`
  position: fixed;
  top: 50px; left: 0;
  z-index: 999;
  margin-left: 10px;
  margin-top: 2.5px;
  width: 45px; height: 45px;
  background: #433838;
  color: #fff;
  border: 2px solid #fff;
  border-bottom-right-radius: 10px;
  svg{
    width: 25px; height: auto;
    fill: #fff;
  }
`;

const CarbonCleaning = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(()=>{
    // fire enter animations
    setIsOpen(true);

    // scroll Top every time we get to the page
    window.scrollTo({  
      top: 0,
      behavior: 'auto'
    })
  }, [])

  return (
    <Container pose={isOpen ? "open" : "closed"}>
      <Hero />
      <Wrapper>
        
        <MobileView>
          <BackButton onTouchEnd={()=>{history.goBack(); }}> <Reply /> </BackButton>
        </MobileView>

        <Header>Carbon cleaning</Header>
        <About>
          <HelpWebButton />
          <p>HHO carbon cleaner 6.0 consumes water by electrolysis, into its components; pure hydrogen and oxygen gases. This gas mixture is now commonly referred to as HHO. With the engine idling, HHO with cleaner agent are simply fed into the combustion chamber via the air intake where it burns, along with the fuel, to reform water vapour. The combination of hydrogen and oxygen enrichment create conditions for carbon to be gently burned off from piston crowns, valves and other components to form carbon dioxide and water vapour. In addition, the water vapour that is formed cannot condense due to the high temperature. So it effectively steam cleans the combustion chamber and associated components from the inside without any dismantling. The carbon deposits are progressively removed and pass out through the exhaust pipe. In the other hand, carbon cleaner keeps cleaning from entering into air intake to the exhaust pipe, what’s more, it forms a protective film to attached to engine parts. For a car engine the process is complete in just 20 minutes.</p>
          <div className="check-container">
            <img src={carbonCleanImage} alt=""/>
            <div className="check-column">
              <div><Check /> <span>Removes carbon deposits from any engine type</span></div>
              <div><Check /> <span>Restores engine performance</span></div>
              <div><Check /> <span>Restores fuel consumption</span></div>
              <div><Check /> <span>Prevents wear of expensive engine parts</span></div>
              <div><Check /> <span>Reduces engine noise</span></div>
              <div><Check /> <span>Increase engine lifespan</span></div>
            </div>
          </div>
        </About>
        <HeaderGallery>
          <Camera />
          <h1>Gallery of</h1>
          <h2>Work Preview</h2>
        </HeaderGallery>

        <div className="gallery-wrapper">
          <GalleryContainer />
        </div>

        <Pricing>
          <PoundSterling />
          <h1>Pricing</h1>
          <p>£ 59,99 for first car</p>
          <p>£ 29,99 for any additional car in same address / at the same time</p>
          <p>+ Free diagnostic tool & error fix</p>
        </Pricing>
        
        <BrowserView style={{marginTop: '25px'}}>
          <NavLink exact to="/services">Back to services</NavLink>
        </BrowserView>
        
      </Wrapper>
    </Container>

  )
}

export default CarbonCleaning
