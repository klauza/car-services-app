import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BrowserView } from "react-device-detect";

const FooterWrap = styled.div`
  background: rgba(0,0,0,.35);
  padding: 12.5px 0;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  /* margin-top: auto; */
  width: 100%;

  @media(max-width: 768px){
    /* display: none; */
  margin: 0 auto 50px;
  }
`;
const Footer = () => {
  return (
    <BrowserView style={{marginTop: 'auto'}}>
      <FooterWrap>
        <NavLink to="/about">About</NavLink>
        FOOTER -- Website created by Michal Klauza
        © Copyright 2020
      </FooterWrap>
    </BrowserView>
  )
}

export default Footer