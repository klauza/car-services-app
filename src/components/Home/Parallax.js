import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

  .container-sp{
    section{
      position: relative;
      height: 400px;
      border-bottom: 1px solid grey;
    
      div{
        position: absolute;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);
      }
      &.parallax{
        background-position: center;
        background-attachment: fixed;
        background-image: url('https://images.pexels.com/photos/3337210/pexels-photo-3337210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
      }
    
    }

  }

`;

const Parallax = () => {
  return (
    <Wrapper>
    <div className="container-sp">
      <section className="parallax"></section>
    </div>
    </Wrapper>
  )
}

export default Parallax
