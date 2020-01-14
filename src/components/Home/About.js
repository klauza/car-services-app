import React from 'react';
import styled from 'styled-components';
import { aboutImagesPsd } from '../../media';


const Wrapper = styled.div`
  margin: 50px 0;
  .about-section{
    text-align: center;
    height: 100%;
    max-width: 1080px;
    width: auto;
    margin: 0 auto;
    padding: 75px 50px;

    background: #D1D1D1;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    p{
      text-align: center;
    }
    button{
      margin: 0 auto;
      width: 120px;
    }

    @media(max-width: 768px){
      margin: 0 15px;
      padding: 65px 25px;
    }
  }
`;

const ImagesContainer = styled.div`
  max-width: 1080px;
  width: auto;
  margin: 0 auto;
  background: url(' ${props => props.bg} ');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  border: 2px solid black;
  border-top: 1px;
  box-shadow: 0 -11px 8px -1px rgba(0,0,0,.5);

  height: 125px;

  @media(max-width: 768px){
    margin: 0 15px;
  }
`;

const About = () => {
  return (
    <Wrapper>
    
      <div className="about-section">
        <h1>About us</h1>
        <p>We offer a vast amount of services, including engine bay cleaning, pipe cleaning. Check FACEBOOK.</p>

        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas incidunt dicta iste minus cupiditate optio!</h3>
      </div>

      <ImagesContainer bg={aboutImagesPsd} />

      

    </Wrapper>
  )
}

export default About
