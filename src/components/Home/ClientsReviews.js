import React from 'react';
import styled from 'styled-components';
import { pugImage } from '../../media';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  
  text-align: center;
  padding: 50px 15px;
  
  h1{
    margin-bottom: 25px;
  }
  
  .client-review-container{
    display: flex; flex-direction: row;
    max-width: 768px;
    border: 1px solid black;
    width: auto; height: auto;
    margin: 10px auto;
    padding: 5px;
    align-items: center;
    text-align: left;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.75);

    .client-box{
      p{
        margin-left: 5px;
      }

      &__name{
        font-weight: 700;
      }

      &__reponse{
      }
    }


  }
`;

const ClientsReviews = () => {

  return (
    <Wrapper>
      <h1>Testimonials</h1>

      <div className="client-review-container">
        <img src={pugImage} alt=""/>
        <div className="client-box">
          <p className="client-box__name">~ Anna</p>
          <p className="client-box__response"><i>Very fast and reliable work. My car feels like new after carbon cleaning service. Fully recommended.</i></p>
        </div>
      </div>

      <div className="client-review-container">
        <img src={pugImage} alt=""/>
        <div className="client-box">
          <p className="client-box__name">~ Rob</p>
          <p className="client-box__response"><i>I'm amazed how this stuff work. I ain't a fan of car mechanics, but this one makes the job done very decent!</i></p>
        </div>
      </div>

    </Wrapper>
  )
}

export default ClientsReviews;