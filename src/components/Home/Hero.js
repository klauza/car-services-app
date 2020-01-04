import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%; height: 50vh;
  background: lightcoral;
  display: grid; place-items: center;
  .hero-split{  
                                                  border: 1px solid red;
    width: 100%;
    display: flex; flex-direction: row;
    align-self: center;
    justify-content: center;
    margin: 0 auto;
    text-align: left;
    @media(max-width: 800px){
    text-align: center;
      width: 100%;
      flex-direction: column;
    }
    div{
      width: 100%;
      border: 1px solid black;
      @media(max-width: 800px){
        display: grid; align-content: center;
        height: auto;
      }
    }

  }
`;
const Hero = () => {
  return (
    <Wrapper className="screen-width">
      <div className="hero-split">

        <div>
          <h1>Invest in your car.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iure alias architecto. Amet, porro rerum!</p>
          <button>See how it works</button>
        </div>

        <div>
          <ul>
            <li>Engine cleaning1</li>
            <li>Engine cleaning2</li>
            <li>Engine cleaning3</li>
            <li>Engine cleaning4</li>
            <li>Engine cleaning5</li>
          </ul>
        </div>

      </div>
    </Wrapper>
  )
}

export default Hero

