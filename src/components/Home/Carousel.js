import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { carTint1, carTint2, carWindow1, carWindow2, carouselEngine, carouselHeadlights, carbonCleanImage } from '../../media';

const Content = styled.div`
  position: relative;

  

  /* CARBON CLEAN */
  .carbon-header, .header-screen{
    color: #fff;
    font-size: 2em;
    position: absolute;
    left: 50%; transform: translateX(-50%);
    bottom: 0%;
    margin-bottom: 25px;
    width: 100%;
    @media(max-width: 768px){
      margin-bottom: 230px;
      
    }
  }
  .header-screen{
    @media(max-width: 768px){
      display: none;
    }
  }
  .img-div-1{
    position: absolute;
    top: 0%;
    right: 2.5%;
    transform: translateY(-140%);
    width: 40%;
    height: auto;

    padding: 10px;
    background: rgba(0,0,0,.5);
    display: flex; flex-direction: column;
    img{
      width: 100%;
      height: auto;
      object-fit: cover;

    }
    p{
      padding: 5px;
      text-align: center;
      color: #fff;
      font-size: 14px;
    }
    button{
      padding: 5px 5px;
      width: 120px;
      display: block;
      margin: 10px auto;
    }
    @media(max-width: 768px){
      width: 95%;
      right: 50%;
      transform: translate(50%, -105%);
      img{
        display: none;
      }
    }
  }

  /* TINTING */
  .img-div-2{
    position: absolute;
    top: 0%;
    right: 2.5%;
    transform: translateY(-140%);
    width: 35%;
    height: auto;

    padding: 10px;
    background: rgba(0,0,0,.35);
    display: flex; flex-direction: column; 
    align-items: flex-end;
    @media(max-width: 768px){
      transform: translate(-3%, -105%);
      width: 90%;
      display: grid;
      grid-template-columns: 2fr 3fr;
      grid-auto-rows: 130px;
      align-items: center;
      img{
        width: 100%!important; height: 100%!important;
        order: 1;
      }
      h1{
        color: #fff;
        order: 2;
      }
      button{
        padding: 10px;
        margin: 0 auto!important;
        order: 3;
      }
      p{
        margin-top: -60px;
        font-size: 0.75em;
        order: 4;
      }
      img:nth-child(1){
        display: none;
      }
    }
    h1{
      @media(min-width: 768px){
        display: none;
      }
    }
    img{
      @media(min-width: 768px){
        padding: 5px;
        float: right;
        width: 175px!important;
        height: auto;
        object-fit: cover;
      }
    }
    p{
      padding: 5px;
      color: #fff;
      text-align: right;
    }
    button{
      padding: 5px;
      width: 120px;
      display: block;
      margin: 10px 0;
    }
  }
`;

const CarouselTwo = () => {
  return (
  <div className="carousel-static-height">
    <Carousel autoPlay={false} interval={3000} showThumbs={false} infiniteLoop={true}>
      <div className="carousel-content">
          <img src={carouselEngine} alt="img" />
          <Content>
            <div className="img-div-1">
              <img src={carbonCleanImage} alt=""/>
              <p>It’s a simple and safe process and requires no dismantling of engine parts or the use of harmful chemical products. We recommended using the HHO carbon cleaner 6.0 to do carbon cleaning service as part of your vehicle’s regular maintenance schedule.</p>
              <button>Read more</button>
            </div>
            <h1 className="carbon-header">Carbon clean</h1>
          </Content>
      </div>
      <div className="carousel-content">
          <img src={carouselHeadlights} alt="img" />
          <Content>
            <div className="img-div-2">
              <img src={carTint1} alt=""/>
              <img src={carWindow1} alt=""/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dicta ipsam nobis delectus at? Maxime non ipsa veniam mollitia minima autem nostrum omnis ea laudantium.</p>
              <button>Read more</button>
              <h1 className="header-mobile">Tinting</h1>
            </div>
            <h1 className="header-screen">Tinting</h1>
            
          </Content>
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
