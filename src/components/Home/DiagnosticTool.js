import React from 'react';
import styled from 'styled-components';
import { diagnosticToolImage, diagnosticToolPattern } from '../../media';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  box-shadow: 0 0 25px -1px rgba(0,0,0,1);
  background: #454141;
  /* background: linear-gradient(150deg, rgba(84, 84, 84, 1), rgba(46, 46, 46, 1)); */
  /* background: url(${diagnosticToolPattern}) repeat; */
  position: relative;
  .front{
    position: absolute;
    top: 50%;
    margin-left: 20px;
    font-size: 1.7em;
    transform: translateY(-50%);
    max-width: 50%;
    @media(max-width: 768px){
      /* max-width:  */
      margin-left: 5px;
      font-size: 1.5em;
    }
    @media(max-width: 360px){
      top: 40%;
    }
    p{
      color: #fff;
    }

  }
  .back{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%; height: 100%;
    box-shadow: inset 0 0 25px -1px rgba(255,0,0,1);
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    opacity: 0.75;
    &::after{
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background: red;
      z-index: 250;
    }

  }
`;

const DiagnosticTool = () => {
  return (
    <Wrapper>
      <div className="front">
        <p>Free diagnostic tool test along any of service!!</p>
      </div>
      <div className="back">
        <img src={diagnosticToolImage} alt="" />
      </div>
    </Wrapper>
  )
}

export default DiagnosticTool
