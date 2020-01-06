import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  background: #545454;
  color: #BFBFBF;
  list-style: none;
  border: 1px solid grey;
  margin-top: 25px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.5);

  display: flex; flex-direction: row;
  .faq-image{
    flex: 1;
    img{
      margin: 5px;
      width: 100px; height: 100px;
      object-fit: cover;
      @media(max-width: 768px){
        width: 65px; height: 65px;
      }
    }
  }
  .faq-content{
    display: flex; flex-direction: column;
    justify-content: space-between;
    flex: 5;

    &-top{
      position: relative;
      margin-bottom :15px;
      &::after{
        content:'';
        /* position: absolute;
        bottom: 0%; */
        margin-top: 15px;
        display: block;
        width: 70%; height: 1px;
        background: rgba(255,255,255,.25);
      }
      
    }
    &-bot{

    }
  }
`;
const FAQItem = ({faq}) => {
  return (
    <Wrapper>
      <div className="faq-image"><img src="http://placekitten.com/150/150" alt=""/></div>
      <div className="faq-content">
        <div className="faq-content-top">Q: {faq.q}</div>
        <div className="faq-content-bot">A: {faq.a}</div>
      </div>
    </Wrapper>
  )
}

export default FAQItem
