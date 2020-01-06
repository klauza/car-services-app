import React from 'react';
import styled from 'styled-components';
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

    p{
      width: 80%;
      margin: 25px auto;
    }
    button{
      line-height: 40px;
      width: 150px;
      margin: 0 auto;
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
        <button>See how it works</button>
      </div>

    </Wrapper>
  )
}

export default Hero

