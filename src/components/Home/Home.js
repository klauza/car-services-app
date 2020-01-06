import React from 'react';
import About from './About';
import Hero from './Hero';
import KeyServices from './KeyServices';

const Home = () => {
  return (
    <>
      <Hero />
      <KeyServices />
      <div style={{width: "900px", height: "1px", margin: "0 auto", background: "rgba(255,255,255,.4)"}}/>
      <About />
    </>
  )
}

export default Home
