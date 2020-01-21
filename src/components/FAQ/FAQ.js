import React from 'react';
import styled from 'styled-components';
import { faqDatabase } from './FAQDatabase';
import FAQItem from './FAQItem';
import posed from 'react-pose';
import Hero from './Hero';

const WrapperContainer = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
  },
  closed: {     
    opacity: 0
  }
});
const Container = styled(WrapperContainer)``; 
const Wrapper = styled.div`
  margin-top: 50px;


  ul{
    max-width: 1280px;
    width: auto;
    margin: 0 auto;
  padding-bottom: 100px;
    @media(max-width: 768px){
      margin: 0 15px;
    }
  }
`;
const UnorderedListPosed = posed.ul({
  initialPose: 'closed',
  open: {
    opacity: 1,
    delayChildren: 300, 
    staggerChildren: 150
  },
  closed: {    
    opacity: 0 
  }
})
const UnorderedList = styled(UnorderedListPosed)``;

const HeaderPosed = posed.h2({
  initialPose: 'closed',
  open: {
    opacity: 1,
    delay: 150
  },
  closed: {     
    opacity: 0
  }
})
const Header = styled(HeaderPosed)`
  display: block;
  text-align: center;
  color: #969B00;
  margin: 25px 0;
  &::after{
    content: '';
    display: block;
    width: 60%; margin: 15px auto 0;
    height: 1px;
    background: rgba(150,155,0,.35);
  }
`;
const FAQ = () => {

  const [isOpen, setIsOpen] = React.useState(false); // modal open ? "animationStart" :"null"

  React.useEffect(()=>{
    // fire enter animations
    setIsOpen(true);

    // scroll Top every time we get to the page
    window.scrollTo({  
      top: 0,
      behavior: 'auto'
    })
  }, [])

  
  return (
    <Container pose={isOpen ? "open" : "closed"}>
      <Hero />
      <Wrapper>
        <Header>Frequently Asked Questions</Header>

        <UnorderedList>
          {faqDatabase.map(faq => 
            <FAQItem key={faq.id} faq={faq} isOpen={isOpen} />
          )}
        </UnorderedList>

      </Wrapper>
    </Container>
  )
}

export default FAQ
