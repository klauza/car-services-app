import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  background: #000;
  color: #fff;
  box-shadow: 0 2px 3px -1px rgba(0,0,0,.6);
`;
const Navbar = () => {
  return (
    <Wrapper>
      <ul>
        <li><NavLink to="/">&#9776; Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/map">Map</NavLink></li>
        <li><NavLink to="/frequently-asked-questions">FAQ</NavLink></li>
      </ul>
      nav
    </Wrapper>
  )
}

export default Navbar
