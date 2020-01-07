import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; 
import { background } from '../../media';


const Wrapper = styled.div`
  width: 100%; height: calc( 100vh - 50px);
  background: url( ${props => props.bg} );
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  @media(max-width: 768px){
    background-position: 50% 50%;
  }
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
const Hero = () => {
  return (
    <Wrapper bg={background}>

      <div className="hero-box">
        <h1>Invest in your car.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iure alias architecto. Amet, porro rerum!</p>
        <button><NavLink to="/services">See how it works</NavLink></button>
      </div>

    </Wrapper>
  )
}

export default Hero

