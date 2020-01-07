import React from 'react';
import styled from 'styled-components';
import { faqDatabase } from './FAQDatabase';
import FAQItem from './FAQItem';
import posed from 'react-pose';

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
  margin-top: 50px;
  h2{
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

  }

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

const FAQ = () => {

  const [isOpen, setIsOpen] = React.useState(false); // modal open ? "animationStart" :"null"

  React.useEffect(()=>{
    setIsOpen(true);
  }, [])

  
  return (
    <Wrapper pose={isOpen ? "open" : "closed"}>
      <h2>Frequently Asked Questions</h2>

      <ul>
        {faqDatabase.map(faq => 
          <FAQItem key={faq.id} faq={faq} />
        )}
      </ul>

    </Wrapper>
  )
}

export default FAQ
