import React from 'react';
import About from './About';
import Hero from './Hero';
import KeyServices from './KeyServices';
import ClientsReviews from './ClientsReviews';
import posed from 'react-pose';
import styled from 'styled-components';

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
      <Hero isOpen={isOpen} />
      <KeyServices />

      <Separator />

      <About />
      <ClientsReviews />
    </Wrapper>
  )
}

export default Home
