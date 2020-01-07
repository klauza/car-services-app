import React from 'react';
import styled from 'styled-components';
import GalleryImage from './GalleryImage';

const Wrapper = styled.div`
  display: flex; flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 1280px;
  width: 100%;
  /* height: 100vh; */
  margin: 0px auto;
  h2{
    margin: 25px 0;
    text-align: center;
    color: #969B00;
    &::after{
      content: '';
      display: block;
      width: 60%; margin: 15px auto 0;
      height: 1px;
      background: rgba(150,155,0,.35);
    }
  }
  p{
    text-align: center;
    color: #BFBFBF;
  }
  @media(max-width: 768px){
    width: auto;
    margin: 0 15px;
  }
`;


const Example = styled.div`
  width: 230px;
  height: 55px;
  margin: 50px 0;
  position: relative;

  div{
    animation: example-animation 2s infinite;
    width: 230px;
    height: 100%;
    /* background: rgba(0,0,0,.65); */
    background: linear-gradient(to right, #000, rgba(0,0,0,.05) );
    /* inear-gradient(to bottom, #e66465, #9198e5); */
    position: absolute; top: 0px;
    z-index: 2;
  }
  p{
    /* position: absolute; top: 0; */
    padding: 15px 5px;
    text-align: left;
    z-index: 3;
  }

  @keyframes example-animation {
    0%{
      opacity: 0;
      width: 0px;
    }
    25%{
      opacity: 1;
    }
    49.9%{
      width: 230px;
    }
    100%{
      width: 0px;
    }
  }
`;

const ServicesGallery = styled.div`
  display: grid;
  grid-gap: 10px;
  /* position: relative; */

  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-template-rows: repeat(3, 1fr); */

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;

  margin: 0 15px;

  /* &::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  } */


  .services-image-gallery{
    &-1{
      grid-column: span 2;
      /* grid-row: 1 / 2; */
      /* grid-column: 1 / 2; */
    }
    &-2{
      /* grid-row: 1 / 2; */
      /* grid-column: 2 / 4; */
    }
    &-3{
      /* grid-row: 1 / 2; */
      /* grid-column: 4 / 5; */
    }
    &-4{
      grid-column: span 2;
      /* grid-row: 2 / 4; */
      /* grid-column: 1 / 3; */
    }
    &-5{
      /* grid-row: 2 / 3; */
      /* grid-column: 3 / 4; */
    }
    &-6{
      grid-row: span 2;
      grid-column: span 2;
      /* grid-row: 2 / 3; */
      /* grid-column: 4 / 5; */
    }
    &-7{
      grid-row: span 2;
      /* grid-row: 3 / 4; */
      /* grid-column: 3 / 5; */
    }
  }
`;

const Backdrop = styled.div`
  display: ${props => props.showBackdrop ? ("unset") : ("none")};
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: #363333;
  z-index: 4;
`;

const Services = () => {

  const [showBackdrop, setShowBackdrop] = React.useState(false);


  const imgDb = [
    {
      id: 1,
      img: 'http://placekitten.com/150/150'
    },
    {
      id: 2,
      img: 'http://placekitten.com/150/150'
    },
    {
      id: 3,
      img: 'http://placekitten.com/150/150'
    },
    {
      id: 4,
      img: 'http://placekitten.com/150/150'
    },
    {
      id: 5,
      img: 'http://placekitten.com/150/150'
    },
    {
      id: 6,
      img: 'http://placekitten.com/150/150'
    },
    {
      id: 7,
      img: 'http://placekitten.com/150/150'
    }
  ]

  return (
    <Wrapper>
      <h2>Services</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, est.</p>

      <Example>
        <p>See examples of our works</p>
        <div></div>
      </Example>

      <Backdrop showBackdrop={showBackdrop} />

      <ServicesGallery>

        {imgDb.map(img => <GalleryImage key={img.id} showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop} img={img} /> )}
        
      </ServicesGallery>
    </Wrapper>
  )
}

export default Services
