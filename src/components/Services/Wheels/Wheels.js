import React from 'react';
import Hero from './Hero';
import styled from 'styled-components';
import posed from 'react-pose';
import GalleryContainer from '../GalleryContainer';
import {
  Check,
  HelpWebButton,
  Reply,
  Camera,
  PoundSterling,
} from '../../../Icons';
import {
  carbonCleanImage,
  wheels_1,
  wheels_2,
  hho_1,
  hho_2,
  hho_3,
  hho_1_sm,
  hho_2_sm,
  hho_3_sm,
} from '../../../media';
import { MobileView, BrowserView } from 'react-device-detect';
import { NavLink } from 'react-router-dom';
import history from '../../../history';

const ContainerPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
});
const Container = styled(ContainerPosed)``;
const Wrapper = styled.div`
  padding-bottom: 150px;
  max-width: 1280px;
  width: 100%;
  margin: 0px auto;
  @media (max-width: 1280px) {
    margin: 0 25px;
  }
  @media (max-width: 768px) {
    width: auto;
    margin: 0 15px;
  }

  a {
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
  &::after {
    content: '';
    display: block;
    width: 250px;
    height: 2px;
    background-color: #fff;
    margin: 0 auto;
    transform: translateX(50px);
  }
  &::before {
    content: '';
    display: block;
    width: 250px;
    height: 2px;
    background-color: #fff;
    margin: 0 33% 0;
    transform: translateX(50px);
  }
`;

const About = styled.div`
  /* background: linear-gradient(to right, #5a5a5a, #5a5a5a, rgba(0, 0, 0, 0)); */
  color: #fff;
  width: auto;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 3px;
  position: relative;
  h1 {
    text-align: center;
    border-radius: 3px;
    /* background: #000; */
    background: linear-gradient(to right, #000, #000, rgba(0, 0, 0, 0));
    color: #fff;
    margin-bottom: 10px;
  }
  & > svg {
    position: absolute;
    top: -12.5px;
    left: -12.5px;
    width: 30px;
    height: auto;
    fill: #fff;
  }
  & > svg,
  & > path,
  & > circle {
    fill: #fff !important;
  }

  .check-container {
    background: linear-gradient(to right, #5a5a5a, #5a5a5a, rgba(0, 0, 0, 0));
    display: grid;
    grid-template-columns: auto auto;
    grid-auto-rows: minmax(295px, 1fr);
    padding: 20px;
    align-items: center;
    @media (max-width: 1125px) {
      grid-template-columns: 1fr;
      grid-auto-rows: minmax(250px, 1fr);
      padding: 2.5px;
    }
    img {
      max-width: 650px;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    .check-column {
      padding: 5px;
      display: flex;
      flex-direction: column;
      svg {
        width: 25px;
        height: auto;
      }
      span {
        @media (max-width: 768px) {
          font-size: 0.75em;
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  p {
    background: linear-gradient(to right, #5a5a5a, #5a5a5a, rgba(0, 0, 0, 0));
    padding: 20px;
  }
`;

const HeaderGallery = styled.div`
  background: linear-gradient(to right, #000, #000, rgba(0, 0, 0, 0));
  color: #fff;
  display: block;
  margin: 50px auto 0;
  width: auto;
  text-align: center;
  position: relative;
  margin-bottom: 10px;
  svg {
    position: absolute;
    top: -12.5px;
    left: -12.5px;
    width: 30px;
    height: auto;
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
  h1 {
    border-radius: 3px;
    /* background: #000; */
    background: linear-gradient(to right, #000, #000, rgba(0, 0, 0, 0));
    color: #fff;
    margin-bottom: 10px;
  }
  svg {
    position: absolute;
    top: -12.5px;
    left: -12.5px;
    width: 30px;
    height: auto;
    fill: #fff;
  }
  p {
    border-radius: 3px;
    /* background: #5A5A5A; */
    background: linear-gradient(to right, #5a5a5a, #5a5a5a, rgba(0, 0, 0, 0));
    padding: 30px 5px;
    margin: 5px 0;
  }
`;
const BackButton = styled.button`
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 999;
  margin-left: 10px;
  margin-top: 2.5px;
  width: 45px;
  height: 45px;
  background: #433838;
  color: #fff;
  border: 2px solid #fff;
  border-bottom-right-radius: 10px;
  svg {
    width: 25px;
    height: auto;
    fill: #fff;
  }
`;

const images = [
  {
    original: hho_1,
    thumbnail: hho_1_sm,
  },
  {
    original: hho_2,
    thumbnail: hho_2_sm,
  },
  {
    original: hho_3,
    thumbnail: hho_3_sm,
  },
];

const CarbonCleaning = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    // fire enter animations
    setIsOpen(true);

    // scroll Top every time we get to the page
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, []);

  return (
    <Container pose={isOpen ? 'open' : 'closed'}>
      <Hero />
      <Wrapper>
        <MobileView>
          <BackButton
            onTouchEnd={() => {
              history.goBack();
            }}
          >
            {' '}
            <Reply />{' '}
          </BackButton>
        </MobileView>

        <Header>Wheels</Header>
        <About>
          <HelpWebButton />
          <h1>About Service</h1>
          <p>
            Your brakes are an integral part of the safety system in your car.
            They are often the first thing checked in an MOT and are necessary
            for the basic function of a car or van. With all this being said,
            brakes must be maintained and replaced when necessary.
          </p>
          <p>
            Although the average life expectancy of a brake pad will differ
            depending on the vehicle, they’re likely to remain intact for
            somewhere between 30,000 and 35,000 miles. This figure can also be
            extended or shortened based on where the car is being driven, as the
            brakes are likely to be used more in cities and towns than they
            would in the countryside.
          </p>
          <p>
            Anyone can do this type of check, but it would be strongly advised
            to avoid the temptation to change the brake pads yourself. The
            process of doing this requires the vehicle to be elevated, technical
            procedures to be carried out and inspections to be made that only a
            professional would be equipped to do. After the brake pads are
            changed, you need to know that your braking system is going to work,
            but by doing it yourself, you won’t have the guarantee of a
            professional and you could be putting yourself, anyone else in the
            vehicle and other drivers at risk.
          </p>
          <div className="check-container">
            <img src={wheels_1} alt="" />
            <img src={wheels_2} alt="" />
          </div>
        </About>
        <HeaderGallery>
          <Camera />
          <h1>Work preview</h1>
        </HeaderGallery>

        <div className="gallery-wrapper">
          <GalleryContainer images={images} />
        </div>

        <Pricing>
          <PoundSterling />
          <h1>Pricing</h1>
          <p>$ 49,99 - 1 tyre replacement</p>
          <p>$ 149,99 - 4 tyres (set) replacement</p>
          <p>$ 19,99 - 1 brake replacement</p>
          <p>$ 69,99 - 4 brakes (set) replacement</p>
          <p>$ 14,99 - 1 pad-brake replacement</p>
          <p>$ 44,99 - 4 pad-brakes (set) replacement</p>
        </Pricing>

        <BrowserView style={{ marginTop: '25px' }}>
          <NavLink exact to="/services">
            Back to services
          </NavLink>
        </BrowserView>
      </Wrapper>
    </Container>
  );
};

export default CarbonCleaning;
