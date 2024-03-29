import React from 'react';
import About from './About';
import ClientsReviews from './ClientsReviews';
import posed from 'react-pose';
import styled from 'styled-components';
import HowItWorks from './HowItWorks';
import DiagnosticTool from './DiagnosticTool';
import CarouselTwo from './Carousel';
import { Next } from '../../Icons';

const WrapperPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
});
const Wrapper = styled(WrapperPosed)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* .down-arrow{

} */
`;

const ArrowPosed = posed.div({
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 200,
    },
  },
  closed: {
    y: -20,
    opacity: 0,
  },
});
const Arrow = styled(ArrowPosed)`
  margin-top: 25px;
  height: 50px;
  svg {
    fill: rgba(255, 255, 255, 0.8);
    width: 35px;
    height: 35px;
    display: block;
    margin: 0 auto;
    transform: rotateZ(90deg);
    filter: drop-shadow(7px -5px 5px rgba(0, 0, 0, 0.7));
  }
`;

const Separator = styled.div`
  width: 60%;
  max-width: 900px;
  height: 1px;
  margin: 100px auto;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );
`;

const Home = () => {
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
    <Wrapper pose={isOpen ? 'open' : 'closed'}>
      <CarouselTwo />
      <Arrow>
        {' '}
        <Next />{' '}
      </Arrow>
      <HowItWorks />

      <Separator />

      <DiagnosticTool />

      <Separator />

      <About />
      <ClientsReviews />
    </Wrapper>
  );
};

export default Home;
