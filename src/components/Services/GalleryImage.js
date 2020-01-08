import React from 'react'
import styled from 'styled-components';
import posed from 'react-pose';


// IMAGE
const TheImgProps = posed.div({
  zoomedIn: {
    position: 'fixed',
    top: 60,
    left: 20,
    bottom: 60,
    right: 20,
    flip: true,
    duration: 400,
    ease: [0.08, 0.69, 0.2, 0.99]
  },
  zoomedOut: {
    position: 'static',
    width: 'auto',
    height: 'auto',
    flip: true,
    duration: 400,
    ease: [0.08, 0.69, 0.2, 0.99]
  }
})

const TheImg = styled(TheImgProps)`
  cursor: ${props => props.showBackdrop ? ("zoom-out") : ("zoom-in")} ;
  box-shadow: 0 3px 2px -1px rgba(0,0,0,.75);
  width: 100%;
  height: 100%;
  z-index: ${props => props.isZoomed ? "6" : "3"};
  border: 1px solid rgba(255,255,255,.5);
  background: rgba(255,255,255,.5);


  img{
    width: 100%; height: 100%; 
    object-fit: cover;
    object-position: top;
  }
`;


const GalleryImage = ({img, showBackdrop, setShowBackdrop}) => {

  const [isZoomed, setIsZoomed] = React.useState(false);

  React.useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(isZoomed){
        setIsZoomed(false);
        setShowBackdrop(false);
      }
    })
  //eslint-disable-next-line
  }, [isZoomed])

  return (
    <TheImg 
        isZoomed={isZoomed}
        className={`services-image-gallery-${img.id}`}
        showBackdrop={showBackdrop} 
        pose={isZoomed ? "zoomedIn" : "zoomedOut"} 
        onClick={()=>{setIsZoomed(prevState => !prevState); setShowBackdrop(prevState=>!prevState)}}
      >
      <img src={img.img} alt=""/>
    </TheImg>
  )
}

export default GalleryImage
