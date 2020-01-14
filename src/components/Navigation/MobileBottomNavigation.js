import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Home, Tools, SpeechBubble, Help } from '../../Icons';

const Wrapper = styled.div`
  z-index: 998;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #433838;

  &>div{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 50px;
  

 

      


      a{
        display: flex; flex-direction: column;
        align-content: flex-start;
        /* height: 50px; */
        text-decoration: none;
        color: #fff;
        font-family: 'Oswald', sans-serif;
        letter-spacing: 1.25px;
        border-top: 1px solid #fff; 
        /* list-style: none; */
        width: 100%; height: 100%;
        &:not(:nth-child(4)){ border-right: 1px solid #fff; }

        svg{
          fill: #fff;
          opacity: .65;
          flex: 1;
          width: 25px;
          height: 25px;
          /* display: block; */
          margin: 3.5px auto 0;
          transition: fill .5s ease;
        }
        svg path, 
        svg circle{
          fill: #fff;
          opacity: .65;
        }

        &.active svg{
          opacity: 1;
          transition: opacity .5s ease;
          path, circle{
              opacity: 1;
              transition: opacity .5s ease;
            }
        }

        span{
          margin-top: -2.5px;
          flex: 1;
          transition: color .5s ease;
          color: rgba(255,255,255,.65);
          text-align: center;
        }
        &.active span{
          color: #fff;
          transition: color .5s ease;
        }
      }

  }

`;

const MobileBottomNavigation = () => {
  return (
    <Wrapper>

      <div>
        <NavLink exact to="/"> <Home /><span>Home</span></NavLink>
        <NavLink exact to="/services"> <Tools /><span>Services</span> </NavLink>
        <NavLink exact to="/contact"> <SpeechBubble /><span>Contact</span></NavLink>
        <NavLink exact to="/frequently-asked-questions"> <Help /><span>FAQ</span></NavLink>
      </div>

    </Wrapper>
  )
}

export default MobileBottomNavigation