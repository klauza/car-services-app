import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const Content = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  margin-left: -45%;
  width: 90%;
  background: #000;
  color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 14px;

  .img-div{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    grid-auto-rows: 100px;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

const CarouselTwo = () => {
  return (
  <div className="carousel-static-height">
    <Carousel autoPlay={false} interval={3000} showThumbs={false} infiniteLoop={true}>
      <div className="carousel-content">
          <img src="https://images.pexels.com/photos/3380967/pexels-photo-3380967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="img" />
          <Content>
            <div className="img-div">
              <img src="https://images.pexels.com/photos/3380967/pexels-photo-3380967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
              <img src="https://images.pexels.com/photos/3380967/pexels-photo-3380967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
              <img src="https://images.pexels.com/photos/3380967/pexels-photo-3380967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
            </div>
            <p>Carbon clean</p>
          </Content>
      </div>
      <div className="carousel-content">
          <img src="https://images.pexels.com/photos/3544412/pexels-photo-3544412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="img" />
          <p className="legend">Legend 2</p>
      </div>
      <div className="carousel-content">
          <img src="https://images.pexels.com/photos/3484702/pexels-photo-3484702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="img" />
          <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  </div>
  )
}


export default CarouselTwo
