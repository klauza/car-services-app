import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { NavLink } from 'react-router-dom';
import { background } from '../../media';
import CarouselOld from './CarouselOld';
import Carousel from './Carousel';


const Wrapper = styled.div`
  width: 100%; height: calc( 100vh - 50px);
  background: url( ${props => props.bg} );
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: 50% 50%;

  .hero-box{  
    position: absolute;
    bottom: 20%; left: 50%;
    transform: translateX(-50%);
    display: flex; flex-direction: column;
    max-width: 600px;
    width: auto;

    text-align: center;
    padding: 15px;
    
    border: 1px solid white;
    color: #fff;
    background: rgba(74, 74, 74, .35);
    
    h1{
      text-shadow: 2px 2px 2px #000;
    }
    p{
      width: 80%;
      margin: 25px auto;
      text-shadow: 2px 2px 2px #000;
    }
    button{
      background: transparent;
      border: 2px solid white;
      line-height: 40px;
      width: 150px;
      margin: 0 auto;
      transition: .5s all ease;
      cursor: pointer;

      border-radius: 5px;

      a{
        text-decoration: none;
        color: white;
        transition: .5s all ease;
        font-size: 1.15rem;
        font-family: 'Oswald', sans-serif;
        display: block;

        &:hover{
          background: lightgrey;
          color: #000; 
          transition: .5s all ease;
        }
      }
    }
    @media(max-width: 768px){
      width: 100%;
      p{
        width: 90%;
      }
    }
  }
`;

const HeroBoxPosed = posed.div({
  open: {
    opacity: 1,
    delayChildren: 250, 
    staggerChildren: 200
  },
  closed: {    
    opacity: 0 
  }
})
const HeroBox = styled(HeroBoxPosed)``;

const H1HeaderPosed = posed.h1({
  open: { 
    y: 0, 
    opacity: 1,

  },
  closed: {
     y: 20, 
     opacity: 0
  }
})
const H1Header = styled(H1HeaderPosed)``;

const ParagraphPosed = posed.p({
  open: { 
    y: 0, 
    opacity: 1,

  },
  closed: {
     y: 20, 
     opacity: 0
  }
})
const Paragraph = styled(ParagraphPosed)``;

const ButtonPosed = posed.button({
  open: { 
    y: 0, 
    scale: 1,
    opacity: 1,

  },
  closed: {
     y: -10, 
     scale: 0.9,
     opacity: 0
  }
})
const Button = styled(ButtonPosed)``;

const Hero = ({isOpen}) => {
  return (
    <Wrapper bg={background} pose={isOpen ? "open" : "closed"}>

      {/* <HeroBox className="hero-box" >
        <H1Header>Invest in your car.</H1Header>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iure alias architecto. Amet, porro rerum!</Paragraph>
        <Button><NavLink to="/services">See how it works</NavLink></Button>
      </HeroBox> */}
      <Carousel />


    </Wrapper>
  )
}

export default Hero

