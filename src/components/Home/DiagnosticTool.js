import React from 'react';
import styled from 'styled-components';
import { diagnosticToolImage } from '../../media';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(84, 84, 84, 1);
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
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  }
`;

const DiagnosticTool = () => {
  return (
    <Wrapper>
      <div className="front">
        <p>Free diagnostic tool test along any of my service!!</p>
      </div>
      <div className="back">
        <img src={diagnosticToolImage} alt="" />
      </div>
    </Wrapper>
  )
}

export default DiagnosticTool
