import React from 'react'
import styled from 'styled-components';

const FooterWrap = styled.div`
  background: rgba(0,0,0,.35);
  padding: 12.5px 0;
  margin: 0 auto 50px;
  text-align: center;
  color: #fff;
  margin-top: auto;
  width: 100%;

  @media(max-width: 768px){
    /* display: none; */
  }
`;
const Footer = () => {
  return (
    <FooterWrap>
      FOOTER
    </FooterWrap>
  )
}

export default Footer