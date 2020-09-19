import React, {forwardRef} from 'react';
import styled from 'styled-components';

const UIBtn1 = styled.button`
  display: block;
  border: 1px solid #fff;
  border-radius: 25px;
  outline: none; 
  padding: 10px 15px;
  box-shadow: 0 3px 4px -1px rgba(0,0,0,.85);
  
  font-family: 'Oswald', sans-serif;
  text-decoration: none;
  a{
    text-decoration: none;
  }
  
  cursor: pointer;
  position: relative;
  transition: all 250ms ease;

  color: #fff;
  background-color: #969B00;

  /* styles from props */
  font-size: 16px;

  /* hover */
  &:hover{
    background-color: lightgrey;
  }
  &:active{
    transition: all 250ms ease;
    box-shadow: 0 3px 12px -1px rgba(0,0,0,.7);
  }
  
`;

// innerText - a text inside a button

export const Button = forwardRef((props, ref) => {
  return(
    <UIBtn1 ref={ref} {...props} >
      {props.innerText} 
    </UIBtn1>
  )
})