import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { TurboEngine, Next, MechanicalEngineer, Engine, Heart, Headlight, Tint } from '../../Icons';
import Hero from './Hero';
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
    font-family: 'Trajan Pro', sans-serif;
    letter-spacing: 7px;
    font-size: 2.5em;
    text-shadow: 2px 2px 2px rgba(0,0,0,1);

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



const Backdrop = styled.div`
  display: ${props => props.showBackdrop ? ("unset") : ("none")};
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: #363333;
  z-index: 4;
`;


const Services = () => {

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


  return (
    <Container pose={isOpen ? "open" : "closed"}>
      <Hero />
      <Wrapper >
        <h1>SERVICES</h1>

        <NavLink className="service-div" exact to="/services/carbon-cleaning" activeClassName="active">
          <Next />
          <h2>Carbon cleaning</h2>
          <div className="service-div-icons">
            <TurboEngine />
            <Engine />
            <Heart />
          </div>
        </NavLink>

        <NavLink className="service-div" exact to="/services/tinting" activeClassName="active">
          <Next />
          <h2>Tinting</h2>
          <div className="service-div-icons">
            <Headlight />
            <Tint />
          </div>
        </NavLink>


      </Wrapper>
    </Container>
  )
}

export default Services
