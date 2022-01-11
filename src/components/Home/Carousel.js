import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import {
  carTint1,
  carWindow1,
  carouselEngine,
  carouselHeadlights,
  carbonCleanImage,
} from '../../media';
import { Button } from '../Reusable/Button';

const Content = styled.div`
  position: relative;

  /* CARBON CLEAN */
  .carbon-header,
  .header-screen,
  .services-header {
    color: #fff;
    text-shadow: 2px 2px 2px #000;
    letter-spacing: 5px;
    font-size: 3em;
    font-family: 'Fredoka One', cursive;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0%;
    margin-bottom: 30px;
    padding: 10px;
    width: 100%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(0, 0, 0, 1),
      transparent
    );
    @media (max-width: 768px) {
      margin-bottom: 230px;
      font-size: 2em;
    }
  }
  .header-screen {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .img-div-1 {
    a {
      text-decoration: none;
      width: 150px;
      align-self: center;
      button {
        width: 150px;
      }
    }
    position: absolute;
    top: 0%;
    right: 2.5%;
    transform: translateY(-140%);
    width: 40%;
    height: auto;

    padding: 10px;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    p {
      padding: 5px;
      text-align: center;
      color: #fff;
      font-size: 1em;
    }

    @media (max-width: 768px) {
      width: 95%;
      right: 50%;
      transform: translate(50%, -105%);
      img {
        display: none;
      }
    }
  }

  /* TINTING */
  .img-div-2 {
    position: absolute;
    top: 0%;
    right: 2.5%;
    transform: translateY(-140%);
    width: 35%;
    height: auto;

    padding: 10px;
    /* background: rgba(0,0,0,.35); */
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    a {
      text-decoration: none;
    }

    & > *:not(:nth-child(1)) {
      z-index: 199;
    }
    &__backdrop {
      /* display: block; */
      /* width: 100%; 
      height: 100%; */
      position: absolute;
      top: 5%;
      bottom: 7.5%;
      left: 10%;
      right: 1%;

      &-content {
        height: 100%;
        width: 100%;
        /* background: rgba(0,0,0,.35); */
        background: linear-gradient(
          to right,
          transparent,
          rgba(0, 0, 0, 0.35),
          rgba(0, 0, 0, 0.35)
        );
      }
      @media (max-width: 768px) {
        top: 0%;
        bottom: 0%;
        left: 0%;
        right: 0%;
        &-content {
          background: rgba(0, 0, 0, 0.35);
        }
      }
    }
    h1 {
      @media (min-width: 768px) {
        display: none;
      }
    }
    img {
      @media (min-width: 768px) {
        padding: 5px;
        float: right;
        width: 175px !important;
        height: auto;
        object-fit: cover;
      }
    }
    p {
      padding: 5px;
      color: #fff;
      text-align: right;
      font-size: 1em;
    }

    @media (max-width: 768px) {
      transform: translate(-3%, -105%);
      width: 90%;
      display: grid;
      grid-template-columns: 2fr 3fr;
      grid-auto-rows: 130px;
      align-items: center;
      .img-div-2__backdrop {
        /* order: 0; */
      }
      img {
        width: 100% !important;
        height: 100% !important;
        order: 1;
      }
      h1 {
        color: #fff;
        order: 2;
        text-shadow: 2px 2px 2px #000;
        font-family: 'Fredoka One', cursive;
      }
      a {
        text-decoration: none;
      }
      button {
        margin: 0 auto !important;
        order: 3;
      }
      p {
        margin-top: -60px;
        font-size: 0.75em;
        order: 4;
        text-align: left;
      }
      img.image-2 {
        display: none;
      }
    }
  }
  /* SOLIDITY */
  .img-div-3 {
    a {
      text-decoration: none;
      width: 150px;
      align-self: center;
      button {
        width: 150px;
      }
    }
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateY(-360%) translateX(-50%);
    width: 40%;
    height: auto;

    padding: 10px;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    p {
      padding: 5px;
      text-align: center;
      color: #fff;
      font-size: 1em;
    }

    @media (max-width: 768px) {
      width: 95%;
      right: 50%;
      transform: translate(50%, -105%);
      img {
        display: none;
      }
    }
  }
`;

const CarouselTwo = () => {
  return (
    <div className="carousel-static-height">
      <Carousel
        autoPlay={true}
        interval={4000}
        showThumbs={false}
        infiniteLoop={true}
      >
        <div className="carousel-content">
          <img src={carouselEngine} alt="img" />
          <Content>
            <div className="img-div-1">
              <img src={carbonCleanImage} alt="" />
              <p>
                <strong>Starting from $59,99</strong>. the most frequently
                chosen service. It’s a simple and safe process. I recommended
                using the HHO carbon cleaner to do carbon cleaning service as
                part of your vehicle’s regular maintenance schedule.
              </p>
              <NavLink exact to="/services/carbon-cleaning">
                <Button innerText="Read more" />
              </NavLink>
            </div>
            <h1 className="carbon-header">Carbon clean</h1>
          </Content>
        </div>
        <div className="carousel-content">
          <img src={carouselHeadlights} alt="img" />
          <Content>
            <div className="img-div-2">
              <div className="img-div-2__backdrop">
                <div className="img-div-2__backdrop-content" />
              </div>
              <img src={carTint1} alt="" className="image-1" />
              <img src={carWindow1} alt="" className="image-2" />
              <p>
                Every vehicle needs a little of update to maintain it's best
                performance. My various services let you not to be afraid before
                choosing a longer distance to drive your car. I do small and big
                repairs as well as cosmetic upgrades for your belowed vehicle.
              </p>
              <NavLink exact to="/services/tinting">
                <Button innerText="Read more" />
              </NavLink>
              <h1 className="header-mobile">Minor repairs</h1>
            </div>
            <h1 className="header-screen">Minor repairs</h1>
          </Content>
        </div>
        <div className="carousel-content">
          <img
            style={{ objectPosition: '50% 75%' }}
            src="https://images.pexels.com/photos/3484702/pexels-photo-3484702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="img"
          />
          <Content>
            <div className="img-div-3">
              <p>Book now, don't wait!</p>
              <NavLink exact to="/services">
                <Button innerText="Book now" />
              </NavLink>
            </div>
            <h1 className="services-header">I offer reliable and solid work</h1>
          </Content>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselTwo;
