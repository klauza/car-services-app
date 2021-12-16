import React from 'react';
import styled from 'styled-components';
import { diagnosticToolImage, diagnosticToolPattern } from '../../media';

const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
  box-shadow: 0 0 25px -1px rgba(0,0,0,1);
  background: #fff;
  /* background: linear-gradient(150deg, rgba(84, 84, 84, 1), rgba(46, 46, 46, 1)); */
  /* background: url(${diagnosticToolPattern}) repeat; */
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 768px){
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
  }

  .left{
    display: flex;
    background: #969b00;
    align-items: center;
    &>div{
      padding: 0 25px;
      text-align: center;
      h1{
        font-size: 5.5em;
        color: #fff;
      }
      p{
        font-weight: 700;
        font-size: 1.25em;
      }

    }
    @media(max-width: 768px){
      &>div{
        margin: 0 auto;
        padding: 10px 0;
      }
    }
  }
  .right{
    background: orange;
    &__image{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const DiagnosticTool = () => {
  return (
    <Wrapper>
      <div className="left">
        <div>
          <h1>FREE</h1>
          <p>diagnostic tool test as addition for each service!</p>
        </div>
      </div>
      <div className="right">
        <div className="right__image">
          <img src={diagnosticToolImage} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default DiagnosticTool;
