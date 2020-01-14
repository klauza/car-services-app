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
const AboutLinkDiv = styled.div`
  position: relative;

  &::before{
    content: '';
    position: absolute;
    left: 40%; top: 50%;
    transform: translateX(-50%, -50%);
    background: linear-gradient(to right, rgba(0,0,0,0), rgba(255,255,255,1));
    height: 1px; width: 100px;
  }
  &::after{
    content: '';
    position: absolute;
    right: 40%; top: 50%;
    transform: translateX(-50%, -50%);
    background: linear-gradient(to left, rgba(0,0,0,0), rgba(255,255,255,1));
    height: 1px; width: 100px;
  }
  a{
    color: #fff;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
`;

const Creator = styled.div`
  p{
    font-size: 0.7rem;
  }
`;

const Footer = () => {
  return (
    <BrowserView style={{marginTop: 'auto'}}>
      <FooterWrap>

        <AboutLinkDiv>
          <NavLink to="/about-website">About</NavLink>
        </AboutLinkDiv>

        <Creator>
          <p>Website created by Michal Klauza, Copyright © 2020</p>
        </Creator>

      </FooterWrap>
    </BrowserView>
  )
}

export default Footer