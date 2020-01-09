import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { contactBg, pugImage } from '../../media';
import Map from './Map';

const WrapperPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
  },
  closed: {     
    opacity: 0
  }
});
const Wrapper = styled(WrapperPosed)`
  height: calc( 100vh - 50px );
  background: url( ${props => props.bg} ) no-repeat;
  background-position: 50% 20%;
  background-size: cover;
  position: relative;
  @media(max-width: 768px){
    overflow-y: scroll;
  }
  .contact-container{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    width: 100%;
    height: auto;
    /* padding: 100px 0; */
    @media(max-width: 768px){
      margin-top: 100px;
    }
    .support-div{
      max-width: 1280px;
      width: 100%;
      margin: 50px auto 100px;

      display: grid; grid-template-columns: 1fr 1fr;
      align-content: center;
      @media(max-width: 1280px){
        /* margin: 0 15px; */
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
          display: block;
          width: 150px;
          margin-top: 10px;
          /* margin: 25px auto; */
          cursor: pointer;
          
          border-radius: 5px;
          border: 1px solid white;
          background: #969B00;
          transition: .5s all ease;
          box-shadow: 0 3px 4px -1px rgba(0,0,0,.85);
          padding: 7.5px 0px;
          font-size: 1.05rem;
          font-family: 'Oswald', sans-serif;
          color: #fff;
          text-shadow: 2px 2px 2px rgba(0,0,0,.5);
          &:hover{
            background: lightgrey;
            color: #000; 
            transition: .5s all ease;
            border: 1px solid black;
          }
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
const ContactParentOptionsPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
    delayChildren: 100, 
    staggerChildren: 100
  },
  closed: {    
    opacity: 0 
  }
})
const ContactParentOptions = styled(ContactParentOptionsPosed)``;
const ContactOptionPosed = posed.div({
  open: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 100,
      delay: 200
    }
  },
  closed: {
     y: 20, 
     opacity: 0
  }
})
const ContactOption = styled(ContactOptionPosed)``;

const ContactDescPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
    delay: 750
  },
  closed: {     
    opacity: 0
  }
})
const ContactDesc = styled(ContactDescPosed)``;
const Contact = () => {

  const [isOpen, setIsOpen] = React.useState(false); // modal open ? "animationStart" :"null"
  const [openMapModal, setOpenMapModal] = React.useState(false);

  React.useEffect(()=>{
    // fire enter animations
    setIsOpen(true);

    // scroll Top every time we get to the page
    window.scrollTo({  
      top: 0,
      behavior: 'auto'
    })
  }, [])

  // open modal
  const openModal = () => {
    setOpenMapModal(true);
  }

  return (
    <React.Fragment>
      { openMapModal && ( <Map setOpenMapModal={setOpenMapModal}/>) }
      <Wrapper bg={contactBg} pose={isOpen ? "open" : "closed"}>  
        <div className="contact-container">
          <div className="support-div">
            <ContactParentOptions className="contact-container__options">
              <ContactOption className="flex-row-option">
                <img src={pugImage} alt=""/>
                <div className="flex-row-option__content">
                  <h2>Address</h2>
                  <p>address line 1</p>
                  <p>address post code</p>
                </div>
              </ContactOption>

              <ContactOption className="flex-row-option">
                <img src={pugImage} alt=""/>
                <div className="flex-row-option__content">
                  <h2>Phone</h2>
                  <p>+44 9559421852</p>
                </div>
              </ContactOption>

              <ContactOption className="flex-row-option">
                <img src={pugImage} alt=""/>
                <div className="flex-row-option__content">
                  <h2>Map</h2>
                  <button onClick={openModal}>Check map</button>
                </div>
              </ContactOption>
            </ContactParentOptions>

            <ContactDesc className="contact-container__desc">
              <div>
                <p>WE ARE OPEN 7 DAYS A WEEK 24H. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat unde similique magni explicabo reiciendis ad, aut error? Sequi architecto quaerat numquam dignissimos maiores, tenetur dolores?</p>
              </div>
            </ContactDesc>
          </div>
        </div>
      </Wrapper>
    </React.Fragment>
  )
}

export default Contact
