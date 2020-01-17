import React from 'react';
import { benefits } from '../../media';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* max-width: 1080px; */
  /* width: auto; */
  /* margin: 0 auto; */
  margin: 100px 0;
  h1{
    text-align: center;
    color: #fff;
  }
  img{
    margin: 0 auto;
    display: block;
  }
`;

const Benefits = () => {
  return (
    <Wrapper>
      <h1>Benefits</h1>
      <img src={benefits} alt=""/>
    </Wrapper>
  )
}

export default Benefits
