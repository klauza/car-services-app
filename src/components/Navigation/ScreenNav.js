import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BrowserView } from "react-device-detect";

const Container = styled.div`
  height: 50px;
  width: 100%;
  background: #363333;
  color: #fff;
  box-shadow: 0 2px 3px -1px rgba(0,0,0,.6);
`;

const BigScreenNav = styled.div`
  max-width: 1280px;
  width: auto;
  margin: 0 auto;
  ul{
    display: flex; flex-direction: row; 
    justify-content: space-between;
    li, a{
      list-style: none;
      color: #fff;
      line-height: 50px;
      height: 100%;
    }
    a{
      padding: 0 15px;
      display: block;
      text-decoration: none;
      &:hover{
        color: grey;
      }
    }
    .big-screen-links{
      display: flex; flex-direction: row;
    }
    .big-screen-faq{
      position: relative;
      padding: 0 20px;
      &::before{
        content: '';
        position: absolute;
        left: 5px;
        top: 50%; transform: translateY(-50%);
        height: 40%;
        width: 1px;
        background: rgba(255,255,255,.4);
        margin-left: 5px;
      }

    }
  }

  @media(max-width: 768px){
    display: none;
  }
`;

const ScreenNav = () => {
  return (
    <BrowserView>
      <Container>
        <BigScreenNav>
          <ul>
            <li>Car Services</li>
              <div className="big-screen-links">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/services">Services</NavLink></li>
                <li><NavLink exact to="/contact">Contact</NavLink></li>
                <li className="big-screen-faq"><NavLink exact to="/frequently-asked-questions">FAQ</NavLink></li>
              </div>
            <li>fb</li>
          </ul>
        </BigScreenNav>
      </Container>
    </BrowserView>
  )
}

export default ScreenNav
