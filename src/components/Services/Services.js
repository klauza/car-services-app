import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {
  TurboEngine,
  Next,
  MechanicalEngineer,
  Engine,
  Heart,
  Headlight,
  Tint,
  Home,
  Address,
  PhoneCall,
  Pin,
} from '../../Icons';
import Hero from './Hero';
import { NavLink } from 'react-router-dom';

import './ImageGallery.scss';
import Booking from './Booking';

const WrapperContainer = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
});
const Container = styled(WrapperContainer)``;
const Wrapper = styled.div`
  .position-relative {
    position: relative;
    overflow: hidden;
  }
  .service-div {
    text-decoration: none;
    padding: 10px 2.5px;
    /* width: 600px; */
    margin: 25px auto 0;
    background: rgba(255, 255, 255, 0.25);
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    grid-auto-rows: auto;
    align-items: center;
    justify-items: center;
    box-shadow: 0 3px 2px -1px rgba(0, 0, 0, 0.6);
    @media (max-width: 768px) {
      width: 100%;
    }
    & > svg {
      margin: 0 5px;
      width: 25px;
      height: auto;
    }

    & > svg {
    }
    h2 {
    }
    .service-div-icons {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      svg {
        width: 35px;
        height: 35px;
        fill: #fff;
      }
    }
    &:hover {
      opacity: 0.85;
    }
  }

  display: flex;
  flex-direction: column;
  /* padding-top: 50px; */
  padding-bottom: 150px;
  max-width: 1280px;
  width: 100%;
  /* height: 100vh; */
  margin: 0px auto;

  h1 {
    /* &::after{
      content: '';
      display: block;
      width: 60%; margin: 15px auto 0;
      height: 1px;
      background: rgba(150,155,0,.35);
    } */
  }
  h2 {
    text-align: center;
    color: #969b00;
  }
  p {
    text-align: center;
    color: #bfbfbf;
  }
  @media (max-width: 768px) {
    width: auto;
    margin: 0 15px;
  }
`;
// HEADER
const HeaderPosed = posed.h2({
  initialPose: 'closed',
  open: {
    opacity: 1,
    delay: 150,
  },
  closed: {
    opacity: 0,
  },
});
const Header = styled(HeaderPosed)`
  margin-top: 50px;
  letter-spacing: var(--font-spacing-header);
  /* font-size: 3em; */
  text-align: center;
  color: var(--font-color-header);
  font-family: var(--font-family-header);
  font-size: var(--font-size-header);
  text-shadow: var(--font-shadow-header);
  &::after {
    content: '';
    display: block;
    width: 60%;
    margin: 15px auto 0;
    height: 1px;
    background: rgba(150, 155, 0, 0.35);
  }
`;

// UL
const UnorderedListPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
    delayChildren: 300,
    staggerChildren: 150,
  },
  closed: {
    opacity: 0,
  },
});
const UnorderedList = styled(UnorderedListPosed)``;

// LI
const UnorderedListItemPosed = posed.div({
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 100,
    },
  },
  closed: {
    y: 20,
    opacity: 0,
  },
});
const UnorderedListItem = styled(UnorderedListItemPosed)`
  max-width: 600px;
  margin: 0 auto;
  transition: 250ms all ease;
  &:hover {
    transition: 250ms all ease;
    transform: scale(1.025) !important;
  }
`;

const Backdrop = styled.div`
  display: ${(props) => (props.showBackdrop ? 'unset' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #363333;
  z-index: 4;
`;

const Services = () => {
  const [isOpen, setIsOpen] = React.useState(false); // modal open ? "animationStart" :"null"

  React.useEffect(() => {
    // fire enter animations
    setIsOpen(true);

    // scroll Top every time we get to the page
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, []);

  return (
    <Container pose={isOpen ? 'open' : 'closed'}>
      <Hero />
      <Wrapper>
        <Header>SERVICES</Header>
        <UnorderedList>
          <UnorderedListItem>
            <NavLink
              className="service-div"
              exact
              to="/services/full-service"
              activeClassName="active"
            >
              <Next />
              <h2>Full service</h2>
              <div className="service-div-icons">
                <Heart />
              </div>
            </NavLink>
          </UnorderedListItem>

          <UnorderedListItem>
            <NavLink
              className="service-div"
              exact
              to="/services/carbon-cleaning"
              activeClassName="active"
            >
              <Next />
              <h2>Carbon cleaning</h2>
              <div className="service-div-icons">
                <TurboEngine />
                <Engine />
                <Heart />
              </div>
            </NavLink>
          </UnorderedListItem>

          <UnorderedListItem>
            <NavLink
              className="service-div"
              exact
              to="/services/remapping"
              activeClassName="active"
            >
              <Next />
              <h2>Remapping</h2>
              <div className="service-div-icons">
                <Engine />
              </div>
            </NavLink>
          </UnorderedListItem>

          <UnorderedListItem>
            <NavLink
              className="service-div"
              exact
              to="/services/dpf"
              activeClassName="active"
            >
              <Next />
              <h2>DPF</h2>
              <div className="service-div-icons">
                <TurboEngine />
              </div>
            </NavLink>
          </UnorderedListItem>

          <UnorderedListItem>
            <NavLink
              className="service-div"
              exact
              to="/services/wheels"
              activeClassName="active"
            >
              <Next />
              <h2>Wheels</h2>
              <div className="service-div-icons">
                <TurboEngine />
              </div>
            </NavLink>
          </UnorderedListItem>

          <UnorderedListItem>
            <NavLink
              className="service-div"
              exact
              to="/services/body-work"
              activeClassName="active"
            >
              <Next />
              <h2>Body work</h2>
              <div className="service-div-icons">
                <Headlight />
                <Tint />
              </div>
            </NavLink>
          </UnorderedListItem>

          <UnorderedListItem>
            <NavLink
              className="service-div"
              exact
              to="/services/aircon-recharge"
              activeClassName="active"
            >
              <Next />
              <h2>Aircon recharge</h2>
              <div className="service-div-icons">
                <TurboEngine />
              </div>
            </NavLink>
          </UnorderedListItem>
        </UnorderedList>
        <Header>Booking</Header>
        <Booking />
      </Wrapper>
    </Container>
  );
};

export default Services;
