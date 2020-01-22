import React from 'react';
import About from './About';
import Hero from './Hero';
import KeyServices from './KeyServices';
import ClientsReviews from './ClientsReviews';
import posed from 'react-pose';
import styled from 'styled-components';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import Benefits from './Benefits';
import DiagnosticTool from './DiagnosticTool';
import CarouselTwo from './Carousel';
import { Next } from '../../Icons';

const WrapperPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
  },
  closed: {     
    opacity: 0
  }
});
const Wrapper = styled(WrapperPosed)`
width: 100%;
height: 100%;
overflow: hidden;
.down-arrow{
  margin-top: 25px;
  height: 50px;
  svg{
    width: 35px; height: 35px;
    display: block;
    margin: 0 auto;
    transform: rotateZ(90deg);
  }
}
`;

const Separator = styled.div`
  width: 60%;
  max-width: 900px;
  height: 1px;
  margin: 125px auto;
  background: linear-gradient(to right, 
    rgba(255,255,255,0),
    rgba(255,255,255,.5),
    rgba(255,255,255,0)
    );
`;

const Home = () => {

  const [isOpen, setIsOpen] = React.useState(false); // modal open ? "animationStart" :"null"

  React.useEffect(()=>{
    // fire enter animations
    setIsOpen(true);

    // scroll Top every time we get to the page
    window.scrollTo({  
      top: 0,
      behavior: 'auto'
    })
  }, [])

  return (
    <Wrapper pose={isOpen ? "open" : "closed"}>
      {/* <Hero isOpen={isOpen} /> */}
      <CarouselTwo />
      <div className="down-arrow"> <Next /> </div>
      <HowItWorks />
      {/* <Benefits /> */}
      {/* <Pricing /> */}
      {/* <KeyServices /> */}

      <Separator />
      <DiagnosticTool />
      <About />
      <ClientsReviews />
    </Wrapper>
  )
}

export default Home
