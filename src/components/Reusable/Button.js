import React, { forwardRef } from 'react';
import styled from 'styled-components';

const UIBtn1 = styled.button`
  transition: all 250ms ease;
  cursor: pointer;
  display: block;
  position: relative;
  padding: 8px 35px;
  margin: 0 auto;

  border: 1px solid #fff;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 3px 4px -1px rgba(0, 0, 0, 0.85);

  // font
  font-size: 1.05rem;
  font-family: 'Oswald', sans-serif;
  text-decoration: none;

  // colors
  color: #fff;
  background: #969b00;

  /* hover */
  &:hover {
    background: lightgrey;
    color: #000;
    transition: 0.5s all ease;
    border: 1px solid black;
  }
  &:active {
    transition: all 250ms ease;
    box-shadow: 0 3px 12px -1px rgba(0, 0, 0, 0.7);
  }

  // link
  a {
    width: 100%;
    text-decoration: none;
  }
`;

// innerText - a text inside a button

export const Button = forwardRef((props, ref) => {
  return (
    <UIBtn1 ref={ref} {...props}>
      {props.innerText}
    </UIBtn1>
  );
});
