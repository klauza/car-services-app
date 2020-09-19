import React from 'react';
import styled from 'styled-components';
import { aboutImagesPsd } from '../../media';


const Wrapper = styled.div`
  margin: 100px 0 200px;
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

    span{
      font-weight: 900;
    }

    h1{
      color: var(--font-color-header);
      font-family: var(--font-family-header);
      text-shadow: var(--font-shadow-header);
      font-size: var(--font-size-header);
      letter-spacing: var(--font-spacing-header);
    }
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
        <br/>
        <p><span>Best quality, flexible reachability, happy customer</span> - main traits which create my services for you.</p>
        <span style={{marginTop: "10px"}} />
        <p>My business was created for daily drivers who value a reliable car. Thanks to the HHO cleaning your demands may come true.</p>
      </div>

      <ImagesContainer bg={aboutImagesPsd} />

      

    </Wrapper>
  )
}

export default About
