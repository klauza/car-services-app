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
  transform: rotateZ(-1.75deg);
  box-shadow: -1px 2px 3px 1px rgba(0, 0, 0, 0.7);

  @media (max-width: 1080px) {
    margin: 80px 15px 100px;
  }
  @media (max-width: 768px) {
    margin: 50px 10px 100px;
  }
  .how-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
    transform: rotateZ(1.75deg);
    margin-bottom: -35px;
    p {
      margin: 30px 0;
      svg {
        width: 15px;
        height: auto;
      }
    }
    a {
      margin-left: 25px;
      width: 200px;
      text-decoration: none;
      button {
        width: 100%;
      }
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
      <div className="how-container">
        <h1>HOW IT WORKS</h1>
        <p>
          <strong style={{ fontSize: '1.25em' }}>1.</strong> Call <PhoneCall />{' '}
          me and get a quote, or just go through booking option.
        </p>
        <p>
          <strong style={{ fontSize: '1.25em' }}>2.</strong> If the service will
          be at my address, you won't pay for additional logistics. If you'd
          like me to come to your address, the total price may increase.
        </p>
        <p>
          <strong style={{ fontSize: '1.25em' }}>3.</strong> See FAQ page if you
          have a question.
        </p>
        <NavLink exact to="/frequently-asked-questions">
          <Button innerText="Read FAQs" />
        </NavLink>
      </div>
    </Wrapper>
  );
};

export default HowItWorks;
