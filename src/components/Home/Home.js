import React from 'react';
import About from './About';
import Hero from './Hero';
import Parallax from './Parallax';

const Home = () => {
  return (
    <div className="screen-width">
      <Hero />
      <Parallax />
      <About />
    </div>
  )
}

export default Home
