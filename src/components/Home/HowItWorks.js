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
  box-shadow: 0 2px 2px 1px rgba(0,0,0,.7);
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
      color: #fff;
      background: #686B09;
      padding: 10px 20px;
      cursor: pointer;

      a{
        display:block;
        width: 100%; height: 100%;
      }
    }
  }

  h1{
    margin: -25px 0 0 10px;
    color: #686B09;
    font-family: 'Trajan Pro', sans-serif;
    letter-spacing: 7px;
    font-size: 2.5em;
    @media(max-width: 768px){
      margin-top: -10px;
      font-size: 1.5em;
    }
  }

`;

const HowItWorks = () => {
  return (
    <Wrapper>
      <div>
        <h1>HOW IT WORKS</h1>
        <p>The price is static as described at the website if you come to my address. Call <PhoneCall /> me and get a quote, if you'd like me to deliver my services to your place too, however it may increase the total cost of service.</p>
        <NavLink exact to="/frequently-asked-questions"><button> Read FAQs </button></NavLink>
      </div>
    </Wrapper>
  )
}

export default HowItWorks
