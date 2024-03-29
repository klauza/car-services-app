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
  remap_1,
  dpf,
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

        <Header>DPF</Header>
        <About>
          <HelpWebButton />
          <h1>About Service</h1>
          <p>
            The DPF is part of a diesel engine's exhaust system, and it is used
            to collect soot and other particles that are generated when the
            diesel fuel is burned inefficiently by the engine. These
            inefficiencies can happen because a diesel car is old or in need of
            a service, although diesel cars that do lots of short low-speed
            journeys where the engine doesn't warm up enough can also be less
            efficient and generate more of these particulate emissions as a
            result.
          </p>
          <p>
            I am offering a DPF replacement, regeneration, depending of your
            vehicle's needs.
          </p>
          <div className="check-container">
            <img src={remap_1} alt="" />
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
          <p>$ 399,99 - replacement</p>
          <p>$ 99,99 - regeneration</p>
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
