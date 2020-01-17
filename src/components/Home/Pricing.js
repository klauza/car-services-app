import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 400px;
  width: auto;
  height: auto;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  text-align: center;
  p{
    padding: 30px 0;
  }
  &>div{
    margin: 0 15px;
    text-align: center;
  }
  @media(max-width: 768px){
    margin: 0 10px;
    div{
      text-align: left;
    }
  }


`;

const Pricing = () => {
  return (
    <Wrapper>
      <h1>Pricing</h1>

      <div>
        <p>59,99 £ for first car</p>
        <p>29,99 £ for any additional in same location</p>
      </div>
      <p>+ free diagnostic tool & errors fix</p>

    </Wrapper>
  )
}

export default Pricing
