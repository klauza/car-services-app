import React from 'react';
import styled from 'styled-components';
import { contactBg } from '../../media';

const Wrapper = styled.div`
  height: calc( 100vh - 50px );
  background: url( ${props => props.bg} ) no-repeat;
  background-position: 50% 20%;
  background-size: cover;
  position: relative;

  .contact-container{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;

    .support-div{
      max-width: 1280px;
      width: auto;
      margin: 0 auto;

      display: grid; grid-template-columns: 1fr 1fr;
      align-content: center;
      @media(max-width: 1280px){
        margin: 0 15px;
      }
      @media(max-width: 768px){
        img{
          width: 100px; height: 100px;
        }
        grid-template-columns: 1fr;
      }
      @media(max-width: 400px){
        img{
          width: 75px; height: 75px;
        }
      }
    }

    &__options{
      width: 100%; height: 100%;
      background: rgba(0,0,0,.5);

      .flex-row-option{
        padding: 15px 5px;
        display: flex; flex-direction: row;
        @media(max-width:768px){
          display: grid; grid-template-columns: 1fr 1fr;
          justify-content: space-around;
        }
        h2{
          color: #969B00;
        }
        p{
          color: #fff;
        }
        button{
          margin-top: 5px;
          width: 120px;
          padding: 7.5px 5px;
        }
        &__content{
          margin-left: 5px;
          display: grid;
          align-content: center;
        }
      }
      
    }

    &__desc{
      width: 100%; height: 100%;
      display: grid;
      align-content: center;

      &>div{
        padding: 50px 15px;
        background: rgba(0,0,0,.5);
        p{
          color: rgba(255,255,255,.75);
          text-align: center;
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper bg={contactBg}>
      <div className="contact-container">
        <div className="support-div">
          <div className="contact-container__options">
            <div className="flex-row-option">
              <img src="http://placekitten.com/150/150" alt=""/>
              <div className="flex-row-option__content">
                <h2>Address</h2>
                <p>address line 1</p>
                <p>address post code</p>
              </div>
            </div>

            <div className="flex-row-option">
              <img src="http://placekitten.com/150/150" alt=""/>
              <div className="flex-row-option__content">
                <h2>Phone</h2>
                <p>+44 9559421852</p>
              </div>
            </div>

            <div className="flex-row-option">
              <img src="http://placekitten.com/150/150" alt=""/>
              <div className="flex-row-option__content">
                <h2>Map</h2>
                <button>Check map</button>
              </div>
            </div>
          </div>

          <div className="contact-container__desc">
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat unde similique magni explicabo reiciendis ad, aut error? Sequi architecto quaerat numquam dignissimos maiores, tenetur dolores?</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact
