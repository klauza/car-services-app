import React from 'react';
import About from './About';
import Hero from './Hero';
import KeyServices from './KeyServices';
import ClientsReviews from './ClientsReviews';

const Home = () => {
  return (
    <>
      <Hero />
      <KeyServices />
      <div style={{width: "60%", maxWidth: "900px", height: "1px", margin: "0 auto", background: "rgba(255,255,255,.4)"}}/>
      <About />
      <ClientsReviews />
    </>
  )
}

export default Home
