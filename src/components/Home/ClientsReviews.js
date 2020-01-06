import React from 'react';
import styled from 'styled-components';

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
    border: 1px solid black;
    max-width: 900px;
    width: auto; height: auto;
    margin: 10px auto;
    padding: 5px;
    display: flex; flex-direction: row;
    align-items: center;
    text-align: left;


    p{
      margin-left: 5px;
    }
  }
`;

const ClientsReviews = () => {

  return (
    <Wrapper>
      <h1>See what my clients say about me</h1>

      <div className="client-review-container">
        <img src="http://placekitten.com/150/150" alt=""/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam labore officiis perspiciatis impedit, est nulla harum optio a delectus dicta.</p>
      </div>

      <div className="client-review-container">
        <img src="http://placekitten.com/150/150" alt=""/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam labore officiis perspiciatis impedit, est nulla harum optio a delectus dicta.</p>
      </div>

    </Wrapper>
  )
}

export default ClientsReviews;