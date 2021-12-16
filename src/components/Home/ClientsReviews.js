import React from 'react';
import styled from 'styled-components';
import { testimony1, testimony2, testimony3 } from '../../media';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background: #fff;

  text-align: center;
  padding: 50px 15px;

  h1 {
    color: var(--font-color-header);
    font-family: var(--font-family-header);
    text-shadow: var(--font-shadow-header);
    font-size: var(--font-size-header);
    letter-spacing: var(--font-spacing-header);

    margin-bottom: 25px;
  }

  .client-review-container {
    display: grid;
    grid-template-columns: 30% 60%;
    grid-auto-rows: 200px;
    /* flex-direction: row; */

    /* width: auto; */
    max-width: 768px;
    border: 1px solid grey;
    /* height: 250px; */
    margin: 30px auto;
    padding: 5px;
    align-items: center;
    text-align: left;
    border: 1px solid #000;

    position: relative;
    &::before {
      content: '';
      position: absolute;
      right: -50px;
      bottom: -50px;
      transform: translateX(-50%) translateY(-50%);
      display: block;
      width: 50px;
      height: 50px;
      background: #fff;
      clip-path: polygon(50% 0, 65% 100%, 0 50%, 0 0);
      /* border: 1px solid #000; */
      outline: 1px solid #000;
    }
    .client-profile {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .client-box {
      p {
        margin-left: 5px;
      }

      &__name {
        font-weight: 700;
      }

      &__reponse {
      }
    }
  }
`;

const ClientsReviews = () => {
  return (
    <Wrapper>
      <h1>Testimonials</h1>

      <div className="client-review-container">
        <div className="client-profile">
          <img src={testimony1} alt="" />
        </div>
        <div className="client-box">
          <p className="client-box__name">~ Anna</p>
          <p className="client-box__response">
            <i>
              Very fast and reliable work. My car feels like new after carbon
              cleaning service. Fully recommended.
            </i>
          </p>
        </div>
      </div>

      <div className="client-review-container">
        <div className="client-profile">
          <img src={testimony2} alt="" />
        </div>
        <div className="client-box">
          <p className="client-box__name">~ Rob</p>
          <p className="client-box__response">
            <i>
              I'm amazed how this stuff work. I ain't a fan of car mechanics,
              but this one makes the job done very decent!
            </i>
          </p>
        </div>
      </div>

      <div className="client-review-container">
        <div className="client-profile">
          <img src={testimony3} alt="" />
        </div>
        <div className="client-box">
          <p className="client-box__name">~ Marius</p>
          <p className="client-box__response">
            <i>
              Fantastic and robust job! Been here twice already and will always
              recommend this place!
            </i>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ClientsReviews;
