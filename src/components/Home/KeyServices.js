import React from 'react'
import styled from 'styled-components';
import { boxServicesImage } from '../../media';
import { Check } from '../../Icons';
import { NavLink } from 'react-router-dom'; 

const Wrapper = styled.div`
  margin: 50px 0;
  .home-services-box{
    max-width: 768px;
    width: auto;
    height: 100%;
    margin: 0 auto;
    background: #686868;
    border-radius: 3px;
    color: white;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.5);

    .home-services-topBar{
      margin: 25px 10%;
      display: flex; flex-direction: row;
      justify-content: space-between;
      div{
        width: 40px; height: 40px;
        img{
          object-fit: cover;
          width: 100%; height: 100%;
        }
      }
    }

    .home-services-list{
      ul{
        display: grid; 
        justify-content: center;
        /* text-align: left; */
        li{
          list-style: none;
          width: auto;
        }
      }
      svg{
        width: 20px;
      }
    }

    button{
      display: block;
      width: 150px;
      margin: 25px auto;
      cursor: pointer;
      
      border-radius: 5px;
      border: 2px solid white;
      background: #969B00;
      transition: .5s all ease;
      box-shadow: 0 3px 4px -1px rgba(0,0,0,.85);
      a{
        display: block;
        padding: 10px 17.5px;
        color: #fff;
        font-size: 1.05rem;
        text-decoration: none;
        font-family: 'Oswald', sans-serif;
        transition: .5s all ease;
        
        &:hover{
          background: lightgrey;
          color: #000; 
          transition: .5s all ease;
        }
      }
    }
    @media(max-width: 768px){
      margin: 0 15px;
    }
  }

`;

const KeyServices = () => {
  return (
    <Wrapper>

      <div className="home-services-box card-layer-beneath">
        <div className="home-services-topBar">
          <div><img src={boxServicesImage} alt=""/></div>
          <h2>KEY SERVICES</h2>
        </div>

        <div className="home-services-list">
          <ul>
            <li><Check /> Car cleaning</li>
            <li><Check /> Performance improvement</li>
            <li><Check /> Smoother driving</li>
            <li><Check /> Clean pipes</li>
            <li><Check /> Overall refreshment</li>
          </ul>
        </div>

        <button><NavLink to="/services">LEARN MORE</NavLink></button>
      </div>

    </Wrapper>
  )
}

export default KeyServices
