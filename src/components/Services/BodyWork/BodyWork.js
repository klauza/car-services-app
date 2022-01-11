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
  carWindow2,
  carTint2,
  tint_1,
  tint_2,
  tint_3,
  tint_1_sm,
  tint_2_sm,
  tint_3_sm,
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
  .tinting-images {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 250px));
    grid-auto-rows: 200px;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
    margin: 15px 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
  }
  .check-column {
    padding: 20px;
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
    original: tint_1,
    thumbnail: tint_1_sm,
  },
  {
    original: tint_2,
    thumbnail: tint_2_sm,
  },
  {
    original: tint_3,
    thumbnail: tint_3_sm,
  },
];

const Tinting = () => {
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

        <Header>Body work</Header>
        <About>
          <HelpWebButton />
          <h1>About Service</h1>
          <p>
            Body work, scrathes, marks - there are four layers on a vehicle, the
            outermost layer is the clear coat. The layer beneath is the actual
            paint or base coat. Below the paint is primer and then bare metal.
            The depth of the scratch will determine what repair procedure is
            needed. Sometimes scratches are minor enough and can be removed
            through buffing or wet sanding. However, deep scratches will involve
            sanding, priming, and painting.
            <div className="tinting-images">
              <img src={carWindow2} alt="" />
              <img src={carTint2} alt="" />
            </div>
            Window tint is always applied to the inside of the car window.. In
            the UK, you can legally tint the rear windows. There are laws for
            the front door windows which should be no darker than a 70% tint.
            {/* <div className="check-container"> */}
            {/* <img src={carbonCleanImage} alt=""/> */}
            <div className="check-column">
              <h3>Services:</h3>

              <div>
                <Check />{' '}
                <span>
                  Window tinting - Increase privacy and interior less visible
                  for potential thieves
                </span>
              </div>

              <div>
                <Check /> <span>Minor auto body repairs</span>
              </div>

              <div>
                <Check />{' '}
                <span>
                  Adding extras such as rims, side skirt spoiler, lamps
                </span>
              </div>
            </div>
          </p>
          {/* </div> */}
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
          <p>need contact for details</p>
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

export default Tinting;
