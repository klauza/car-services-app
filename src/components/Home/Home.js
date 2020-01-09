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
      <div style={{width: "60%", maxWidth: "900px", height: "1px", margin: "0 auto", background: "rgba(255,255,255,.4)"}}/>
      <About />
      <ClientsReviews />
    </Wrapper>
  )
}

export default Home
