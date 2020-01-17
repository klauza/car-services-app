import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1080px;
  width: auto;
  height: 150%;
  background: #fff;
  border: 1px solid lightgrey;
  border-radius: 8px;
  margin: 100px auto;
  transform: rotateZ(-2.5deg);
  box-shadow: 0 2px 2px 1px rgba(0,0,0,.7);
  @media(max-width: 768px){
    margin: 100px 10px;
  }
  &>div{
    padding: 10px;
    transform: rotateZ(2.5deg);
    p{
      margin: 50px 0;
    }
    button{
      border: 1px solid black;
      border-radius: 10px;
      color: #000;
      background: red;
      padding: 10px 15px;
      cursor: pointer;
    }
  }

  h1{
    letter-spacing: 8px;
    margin: -10px 0 0 10px;
    color: #4287f5;
    @media(max-width: 768px){
      margin-top: -30px;
    }
  }

`;

const HowItWorks = () => {
  return (
    <Wrapper>
      <div>
        <h1>How it works</h1>
        <p>It’s a simple and safe process and requires no dismantling of engine parts or the use of harmful chemical products. We recommended using the HHO carbon cleaner 6.0 to do carbon cleaning service as part of your vehicle’s regular maintenance schedule.</p>
        <button>Read more</button>
      </div>
    </Wrapper>
  )
}

export default HowItWorks
