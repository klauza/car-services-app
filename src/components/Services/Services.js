import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import GalleryImage from './GalleryImage';
import { pugImage } from '../../media';
import { TurboEngine, Next, MechanicalEngineer, Engine, Heart, Headlight, Tint } from '../../Icons';
import Hero from './Hero';
import GalleryContainer from './GalleryContainer';
import { NavLink } from 'react-router-dom';

import './ImageGallery.scss';

const WrapperContainer = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
  },
  closed: {     
    opacity: 0
  }
});
const Container = styled(WrapperContainer)``;
const Wrapper = styled.div`
  .service-div{
    text-decoration: none;
    padding: 10px 2.5px;
    width: 600px;
    margin: 25px auto 0;
    background: rgba(255,255,255,.25);
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    grid-auto-rows: auto;
    align-items: center;
    justify-items: center;
    box-shadow: 0 3px 2px -1px rgba(0,0,0,.6);
    @media(max-width: 768px){
      width: 100%;
    }
    &>svg{
      margin: 0 5px;
      width: 25px; height: auto;
    }

    &>svg{

    }
    h2{

    }
    .service-div-icons{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      svg{
        width: 35px; height: 35px;
        fill: #fff;
      }
    }
    &:hover{
      opacity: 0.85;
    }
  }


  display: flex; flex-direction: column;
  /* padding-top: 50px; */
  padding-bottom: 150px;
  max-width: 1280px;
  width: 100%;
  /* height: 100vh; */
  margin: 0px auto;
  h1{
    letter-spacing: 12px;
    /* font-size: 3em; */
    text-align: center;
    color: #969B00;
    /* &::after{
      content: '';
      display: block;
      width: 60%; margin: 15px auto 0;
      height: 1px;
      background: rgba(150,155,0,.35);
    } */
  }
  h2{
    text-align: center;
    color: #969B00;
  }
  p{
    text-align: center;
    color: #BFBFBF;
  }
  @media(max-width: 768px){
    width: auto;
    margin: 0 15px;
  }
`;


const Example = styled.div`
  width: 320px;
  height: 55px;
  margin: 50px 0;
  position: relative;
  svg{
    fill: #fff;
    width: 50px; height: 50px;
  }

  div{
    /* animation: example-animation 2s infinite; */
    width: 230px;
    height: 100%;
    background: rgba(0,0,0,.65);
    background: linear-gradient(to right, #000, rgba(0,0,0,.05) );
    /* inear-gradient(to bottom, #e66465, #9198e5); */
    position: absolute; top: 0px;
    z-index: 2;
  }
  p{
    /* position: absolute; top: 0; */
    margin-left: 90px;
    padding: 15px 5px;
    text-align: left;
    z-index: 3;
  }

  /* @keyframes example-animation {
    0%{
      opacity: 0;
      width: 0px;
    }
    25%{
      opacity: 1;
    }
    49.9%{
      width: 230px;
    }
    100%{
      width: 0px;
    }
  } */
`;

const ServicesGallery = styled.div`
  display: grid;
  grid-gap: 10px;
  /* position: relative; */

  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-template-rows: repeat(3, 1fr); */

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;

  margin: 0 15px;

  /* &::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  } */


  .services-image-gallery{
    &-1{
      grid-column: span 2;
      /* grid-row: 1 / 2; */
      /* grid-column: 1 / 2; */
    }
    &-2{
      grid-row: span 2;
      /* grid-row: 1 / 2; */
      /* grid-column: 2 / 4; */
    }
    &-3{
      /* grid-row: 1 / 2; */
      /* grid-column: 4 / 5; */
    }
    &-4{
      grid-column: span 2;
      /* grid-row: 2 / 4; */
      /* grid-column: 1 / 3; */
    }
    &-5{
      /* grid-row: 2 / 3; */
      /* grid-column: 3 / 4; */
    }
    &-6{
      /* grid-row: span 2; */
      /* grid-column: span 2; */
      /* grid-row: 2 / 3; */
      /* grid-column: 4 / 5; */
    }
    &-7{
      /* grid-row: span 2; */
      /* grid-row: 3 / 4; */
      /* grid-column: 3 / 5; */
    }
  }
`;

const Backdrop = styled.div`
  display: ${props => props.showBackdrop ? ("unset") : ("none")};
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: #363333;
  z-index: 4;
`;


const Services = () => {

  const [showBackdrop, setShowBackdrop] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false); // modal open ? "animationStart" :"null"

  React.useEffect(()=>{
    // fire enter animations
    setIsOpen(true);

    // scroll Top every time we get to the page
    window.scrollTo({  
      top: 0,
      behavior: 'auto'
    })
  }, [])

  const imgDb = [
    {
      id: 1,
      img: pugImage
    },
    {
      id: 2,
      img: pugImage
    },
    {
      id: 3,
      img: pugImage
    },
    {
      id: 4,
      img: pugImage
    },
    {
      id: 5,
      img: pugImage
    },
    {
      id: 6,
      img: pugImage
    },
    {
      id: 7,
      img: pugImage
    }
  ]

  return (
    <Container pose={isOpen ? "open" : "closed"}>
      <Hero />
      <Wrapper >
        <h1>SERVICES</h1>

        <NavLink className="service-div" exact to="/services/carbon-cleaning">
          <Next />
          <h2>Carbon cleaning</h2>
          <div className="service-div-icons">
            <TurboEngine />
            <Engine />
            <Heart />
          </div>
        </NavLink>

        <NavLink className="service-div" exact to="/services/tinting">
          <Next />
          <h2>Tinting</h2>
          <div className="service-div-icons">
            <Headlight />
            <Tint />
          </div>
        </NavLink>




        {/* <Example>
          <p>See examples of our work</p>
          <div>
            Turbo svg <TurboEngine />
            Mechanic svg <MechanicalEngineer />
            Home: <Home />
          </div>
        </Example> */}

        {/* <Backdrop showBackdrop={showBackdrop} /> */}

        {/* <GalleryContainer /> */}

        {/* <ServicesGallery>

          {imgDb.map(img => <GalleryImage key={img.id} showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop} img={img} /> )}
          
        </ServicesGallery> */}

      </Wrapper>
    </Container>
  )
}

export default Services
