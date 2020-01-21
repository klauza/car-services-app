import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        visibleSlides={1}
        naturalSlideWidth={1920}
        naturalSlideHeight={1080}
        totalSlides={3}
        className="custom-css-react-carousel-main"
        interval={3000}
        orientation="horizontal"
        isPlaying={true}
        hasMasterSpinner
      >
      <h2>Carousel (With Master Loading Spinner)</h2>
        <Slider style={{height: '100%'}}>
          <Slide index={0}><Image className="custom-css-react-carousel-image"  src="https://images.pexels.com/photos/3380967/pexels-photo-3380967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/></Slide>
          <Slide index={1}><Image className="custom-css-react-carousel-image"   src="https://images.pexels.com/photos/3473492/pexels-photo-3473492.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/> I am the second Slide.</Slide>
          <Slide index={2}><Image className="custom-css-react-carousel-image"  src="https://images.pexels.com/photos/3467150/pexels-photo-3467150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/> I am the third Slide.</Slide>
        </Slider>
        <ButtonBack className="custom-carousel-button">Back</ButtonBack>
        <ButtonNext className="custom-carousel-button">Next</ButtonNext>
        <DotGroup dotNumbers />
      </CarouselProvider>
    );
  }
}