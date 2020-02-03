import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PhoneCall } from '../../Icons';

const Wrapper = styled.div`
  max-width: 1080px;
  width: auto;
  height: auto;
  background: #fff;
  border: 1px solid lightgrey;
  border-radius: 8px;
  margin: 80px auto 100px;
  transform: rotateZ(-1.75deg);
  box-shadow: -1px 2px 3px 1px rgba(0,0,0,.7);
  @media(max-width: 1080px){
    margin: 80px 15px 100px;
  }
  @media(max-width: 768px){
    margin: 50px 10px 100px;
  }
  &>div{
    padding: 10px;
    transform: rotateZ(1.75deg);
    margin-bottom: -35px;
    p{
      margin: 50px 0;
      svg{
        width: 15px; height: auto;
      }
    }
    button{
      border: 1px solid #000;
      border-radius: 25px;
      background: #686B09;
      box-shadow: 2px 2px 2px 0 rgba(0,0,0,1);
      cursor: pointer;

      a{
        display: block;
        width: 100%; height: 100%;
        color: #fff;
        padding: 10px 20px;
        text-decoration: none;
      }
      &:hover{
        border: 1px solid #fff;
        background: #ffc012;
        transition: all 250ms ease;
        a{
          color: #000;
          transition: all 250ms ease;
        }
      }
    }
  }

  h1{
    color: var(--font-color-header);
    font-family: var(--font-family-header);
    text-shadow: var(--font-shadow-header);
    font-size: var(--font-size-header);
    letter-spacing: var(--font-spacing-header);
    
    margin: -25px 0 0 10px;
    @media(max-width: 768px){
      margin-top: -22.5px;
      font-size: 5vw;
    }
    @media(max-width: 405px){
      letter-spacing: 1px;
      margin-top: -5px;
      font-size: 6vw;
      text-shadow: unset;
    }
  }

`;

const HowItWorks = () => {
  return (
    <Wrapper>
      <div>
        <h1>HOW IT WORKS</h1>
        <p><strong style={{fontSize: "1.25em"}}>1.</strong> Call <PhoneCall /> me and get a quote. </p>
        <p><strong style={{fontSize: "1.25em"}}>2.</strong> If you come to my address, the price will be as described at the website, starting from £59,99</p>
        <p><strong style={{fontSize: "1.25em"}}>3.</strong> If you'd like me to come to your address, the total price may increase </p>
        <button><NavLink exact to="/frequently-asked-questions"> Read FAQs </NavLink></button>
      </div>
    </Wrapper>
  )
}

export default HowItWorks
