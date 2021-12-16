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

        <Header>Full service</Header>
        <About>
          <HelpWebButton />
          <h1>About Service</h1>
          <p>
            Car servicing is important for so many reasons. Not only does it
            save you time and money on any big issues your car may have, but it
            could also save your life by identifying the issues early on. It’s
            important, but what’s involved in a car service, and why is it
            needed if you’ve already had an MOT? We’ve got the answers for you!
            A regular car service checks the condition of your car. It can
            assess everything from general wear and tear to fluids, brakes, the
            engine, and more. Each service is different depending on your
            vehicle’s make and model.
          </p>
          <div className="check-container">
            <div className="check-column">
              <div>
                <Check />{' '}
                <span>engine oil change and/or filter replacement</span>
              </div>
              <div>
                <Check /> <span>ensuring the engine is correctly tuned</span>
              </div>
              <div>
                <Check /> <span>lights, tyres, exhaust</span>
              </div>
              <div>
                <Check /> <span>battery condition</span>
              </div>
              <div>
                <Check /> <span>coolant levels and hydraulic fluid</span>
              </div>
              <div>
                <Check /> <span>cooling system</span>
              </div>
              <div>
                <Check /> <span>suspension</span>
              </div>
              <div>
                <Check /> <span>steering alignment</span>
              </div>
            </div>
            <img src={carbonCleanImage} alt="" />
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
          <p>$ 99,99 - labour price for full service</p>
          <p>$ 24,99 - MOT prep checks</p>
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
