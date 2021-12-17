import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 30vh;
  width: 100%;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 45%;
  @media (max-width: 768px) {
    background-position: center 10%;
  }
`;

const Hero = () => {
  return (
    <Wrapper
      background={
        'https://images.pexels.com/photos/159293/car-engine-motor-clean-customized-159293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ></Wrapper>
  );
};

export default Hero;
