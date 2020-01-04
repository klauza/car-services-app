import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 30vh;
  background: lightgreen;
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  p{
    text-align: center;
  }
  button{
    margin: 0 auto;
    width: 120px;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <p>ABOUT - We offer a vast amount of services, including engine bay cleaning, pipe cleaning</p>
      <button>Check all services</button>
    </Wrapper>
  )
}

export default About
