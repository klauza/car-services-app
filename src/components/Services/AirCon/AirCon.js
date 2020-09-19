import React from 'react';
import Hero from './Hero';
import styled from 'styled-components';
import posed from 'react-pose';
import GalleryContainer from '../GalleryContainer';
import { Check, HelpWebButton, Reply, Camera, PoundSterling } from '../../../Icons';
import { carWindow2, carTint2, tint_1, tint_2, tint_3, tint_1_sm, tint_2_sm, tint_3_sm } from '../../../media';
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
  .tinting-images{
    width: 100%;
    display: grid; grid-template-columns: repeat(auto-fit, minmax(auto, 250px));
    grid-auto-rows: 200px;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
    img{
      width: 100%; height: 100%;
      object-fit: cover;
    }
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
  }
  .check-column{
    padding: 20px;
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

const images = [
  {
    original: tint_1,
    thumbnail: tint_1_sm,
  },
  {
    original: tint_2,
    thumbnail: tint_2_sm,
  },
  {
    original: tint_3,
    thumbnail: tint_3_sm,
  },
];


const Tinting = () => {
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

        <Header>Tinting</Header>
        <About>
          <HelpWebButton />
          <p>Tinting allow you to completely change the appearance of your vehicle. In the UK, light tinting films are permitted. Films are very durable and they’re waterproof, which means that they can be washed and treated like any other surface on your vehicle. Light tinting films can last for years, however if you’re ready for a change they can simply be removed without damaging the lights.</p>
          <div className="tinting-images">
            <img src={carWindow2} alt="" />
            <img src={carTint2} alt="" />
          </div>
          <p>Window tint is always applied to the inside of the car window.. In the UK, you can legally tint the rear windows. There are laws for the front door windows which should be no darker than a 70% tint.</p>
          {/* <div className="check-container"> */}
            {/* <img src={carbonCleanImage} alt=""/> */}
            <div className="check-column">
              <h3>Benefits:</h3>
              <div><Check /> <span>Increase privacy</span></div>
              <div><Check /> <span>Interior less visible for potential thieves</span></div>
            </div>
          {/* </div> */}
        </About>
        <HeaderGallery>
          <Camera />
          <h1>Gallery of</h1>
          <h2>Work Preview</h2>
        </HeaderGallery>

        <div className="gallery-wrapper">
          <GalleryContainer images={images} />
        </div>

        <Pricing>
          <PoundSterling />
          <h1>Pricing</h1>
          <p>£ 19,99 for headlights</p>
          <p>£ 29,99 for any window</p>
        </Pricing>
        
        <BrowserView style={{marginTop: '25px'}}>
          <NavLink exact to="/services">Back to services</NavLink>
        </BrowserView>
        
      </Wrapper>
    </Container>

  )
}

export default Tinting
