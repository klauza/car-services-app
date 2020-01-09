import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { HelpWebButton } from '../../Icons';

const WrapperPosed = posed.li({
  open: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 100,
      delay: 100
    }
  },
  closed: {
     y: 20, 
     opacity: 0
  }
})
const Wrapper = styled(WrapperPosed)`
  background: #545454;
  color: #BFBFBF;
  list-style: none;
  border: 1px solid grey;
  margin-top: 25px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.5);

  display: flex; flex-direction: row;
  @media(max-width: 768px){
    flex-direction: column;
  }
  .faq-image{
    flex: 1;
    svg{
      width: 100px; 
      height: 100px;
      margin: 5px;
      filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
      circle, path{
        fill: #969B00;
      }

      @media(max-width: 768px){
        width: 65px;
        height: 65px;
        margin: 5px auto;
        display: block;
      }
    }

    
  }
  .faq-content{
    display: flex; flex-direction: column;
    justify-content: space-between;
    flex: 5;

    @media(max-width: 768px){
      margin: 5px 10px;
    }
    &-top{
      position: relative;
      margin-bottom :15px;
      &::after{
        content:'';

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
const FAQItem = ({faq, isOpen}) => {
  return (
    <Wrapper pose={isOpen ? "open" : "closed"}>
      <div className="faq-image"><HelpWebButton /></div>
      <div className="faq-content">
        <div className="faq-content-top">Q: {faq.q}</div>
        <div className="faq-content-bot">A: {faq.a}</div>
      </div>
    </Wrapper>
  )
}

export default FAQItem
