import React from 'react';
import Hero from './Hero';
import styled from 'styled-components';
import GalleryContainer from '../GalleryContainer';
import { Check, HelpWebButton, Reply, Camera, PoundSterling } from '../../../Icons';
import { carbonCleanImage } from '../../../media';
import { MobileView, BrowserView } from "react-device-detect";
import { NavLink } from 'react-router-dom';
import history from '../../../history';

const Wrapper = styled.div`

  padding-bottom: 150px;
  max-width: 1280px;
  width: 100%;
  margin: 0px auto;
  @media(max-width: 1280px){
    margin: 0 25px;
  }
  @media(max-width: 768px){
    width: auto;
    margin: 0 15px;
  }

  a{
    color: white;
  }
`;

const Header = styled.h1`
  margin: -50px auto 50px;
  padding-bottom: 50px;
  text-align: center;
  transform: rotateZ(-5deg);
  font-size: 3.5em;
  color: #fff;
  &::after{
    content:'';
    display: block;
    width: 250px;
    height: 2px;
    background-color: #fff;
    margin: 0 auto;
    transform: translateX(50px);
  }
`;

const About = styled.div`
  background: linear-gradient(to right, #5A5A5A, #5A5A5A, rgba(0,0,0,0));
  color: #fff;
  width: auto; 
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 3px;
  position: relative;
  &>svg{
    position: absolute;
    top: -12.5px; left: -12.5px;
    width: 30px; height: auto;
    fill: #fff;
  }
  &>svg, &>path, &>circle{
    fill: #fff!important;
  }

  .check-container{
    display: grid;
    grid-template-columns: auto auto;
    grid-auto-rows: minmax(295px, 1fr);
    padding: 20px;
    align-items: center;
    @media(max-width: 1125px){
      grid-template-columns: 1fr;
      grid-auto-rows: minmax(250px, 1fr);
      padding: 2.5px;
    }
    img{
      max-width: 650px;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    .check-column{
      padding: 5px;
      display: flex; flex-direction: column;
      svg{
        width: 25px; height: auto;
      }
      span{
        @media(max-width: 768px){
          font-size: 0.75em;
        }
      }
    }
  }

  @media(max-width: 768px){
    margin-top: 50px;
  }

  p{
    padding: 20px;
  }
`;

const HeaderGallery = styled.div`
  background: linear-gradient(to right, #5A5A5A, #5A5A5A, rgba(0,0,0,0));
  color: #fff;
  display: block;
  margin: 50px auto 0;
  width: auto;
  text-align: center;
  position: relative;
  svg{
    position: absolute;
    top: -12.5px; left: -12.5px;
    width: 30px; height: auto;
    fill: #fff;

  }
`;
const Pricing = styled.div`
  width: auto;
  height: auto;
  position: relative;
  margin-top: 50px;
  color: #fff;
  text-align: center;
  padding-bottom: 20px;
  h1{
    border-radius: 3px;
    background: #000;
    color: #fff;
    margin-bottom: 10px;
  }
  svg{
    position: absolute;
    top: -12.5px; left: -12.5px;
    width: 30px; height: auto;
    fill: #fff;
  }
  p{
    border-radius: 3px;
    background: #5A5A5A;
    padding: 30px 5px;
    margin: 5px 0;
  }
`;
const BackButton = styled.button`
  position: fixed;
  top: 50px; left: 0;
  z-index: 999;
  margin-left: 10px;
  margin-top: 2.5px;
  width: 45px; height: 45px;
  background: #433838;
  color: #fff;
  border: 2px solid #fff;
  border-bottom-right-radius: 10px;
  svg{
    width: 25px; height: auto;
    fill: #fff;
  }
`;

const Tinting = () => {



  return (
    <React.Fragment>
      <Hero />
      <Wrapper>
        
        <MobileView>
          <BackButton onTouchEnd={()=>{history.goBack(); }}> <Reply /> </BackButton>
        </MobileView>

        <Header>Tinting</Header>
        <About>
          <HelpWebButton />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia at atque adipisci quo accusamus eum dolores. Qui, impedit dicta dolorum tenetur eveniet sapiente natus quis?</p>
          {/* <div className="check-container">
            <img src={carbonCleanImage} alt=""/>
            <div className="check-column">
              <div><Check /> <span>Removes carbon deposits from any engine type</span></div>
              <div><Check /> <span>Restores engine performance</span></div>
              <div><Check /> <span>Restores fuel consumption</span></div>
              <div><Check /> <span>Prevents wear of expensive engine parts</span></div>
              <div><Check /> <span>Reduces engine noise</span></div>
              <div><Check /> <span>Increase engine lifespan</span></div>
            </div>
          </div> */}
        </About>
        <HeaderGallery>
          <Camera />
          <h1>Gallery of</h1>
          <h2>Work Preview</h2>
        </HeaderGallery>

        <div className="gallery-wrapper">
          <GalleryContainer />
        </div>

        <Pricing>
          <PoundSterling />
          <h1>Pricing</h1>
          <p>£ 19,99 for headlights</p>
          <p>£ 29,99 for any window</p>
        </Pricing>
        
        <BrowserView style={{marginTop: '25px'}}>
          <NavLink exact to="/services">Back to services</NavLink>
        </BrowserView>
        
      </Wrapper>
    </React.Fragment>

  )
}

export default Tinting
