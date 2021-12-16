import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PhoneCall } from '../../Icons';
import { Button } from '../Reusable/Button';

const Wrapper = styled.div`
  max-width: 1080px;
  width: auto;
  height: auto;
  background: #fff;
  border: 1px solid lightgrey;
  border-radius: 8px;
  margin: 80px auto 100px;
  transform: rotateZ(1.75deg);
  box-shadow: -1px 2px 3px 1px rgba(0, 0, 0, 0.7);

  @media (max-width: 1080px) {
    margin: 80px 15px 100px;
  }
  @media (max-width: 768px) {
    margin: 50px 10px 100px;
  }
  .about-container {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 50px;
    transform: rotateZ(-1.75deg);
    margin-bottom: -35px;
    margin-left: 25px;
    p {
      margin: 5px 0 25px;
      font-weight: 900;
    }
    h3 {
    }

    ul {
      margin-bottom: 10px;
      list-style-position: inside;
    }
  }

  h1 {
    color: var(--font-color-header);
    font-family: var(--font-family-header);
    text-shadow: var(--font-shadow-header);
    font-size: var(--font-size-header);
    letter-spacing: var(--font-spacing-header);

    margin: -25px 0 0 10px;
    @media (max-width: 768px) {
      margin-top: -22.5px;
      font-size: 5vw;
    }
    @media (max-width: 405px) {
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
      <div className="about-container">
        <h1>About us</h1>
        <p>
          My business was created for daily drivers who value a reliable car.
          Thanks to my skillset and strong craving to offer help, your demands
          may come true.
        </p>

        <h3>Our traits</h3>
        <ul>
          <li>robust work</li>
          <li>flexible reachability</li>
          <li>highest quality exchange parts</li>
        </ul>
        <h3>Our goals</h3>
        <ul>
          <li>happy customer</li>
          <li>happy customer</li>
        </ul>
        <br />
      </div>
    </Wrapper>
  );
};

export default HowItWorks;
