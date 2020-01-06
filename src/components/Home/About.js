import React from 'react';
import styled from 'styled-components';


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

const About = () => {
  return (
    <Wrapper>

      <div className="about-section">
        <h1>About us</h1>
        <p>We offer a vast amount of services, including engine bay cleaning, pipe cleaning</p>

        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas incidunt dicta iste minus cupiditate optio!</h3>
      </div>

    </Wrapper>
  )
}

export default About
