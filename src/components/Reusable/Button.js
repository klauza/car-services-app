import React, {forwardRef} from 'react';
import styled from 'styled-components';

const UIBtn1 = styled.button`
  display: block;
  border: 0; 
  outline: none; border-radius: 2px;
  padding: 10px 15px;
  box-shadow: 0 3px 4px -1px rgba(0,0,0,.85);
  font-family: 'Oswald', sans-serif;
  
  cursor: pointer;
  position: relative;
  transition: box-shadow 125ms ease;

  color: #fff;
  background-color: #969B00;

  /* styles from props */
  font-size: 16px;

  /* hover */
  &:hover{
    background-color: lightgrey;
  }
  &:active{
    transition: box-shadow 125ms ease;
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