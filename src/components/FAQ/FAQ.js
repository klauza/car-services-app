import React from 'react';
import styled from 'styled-components';
import { faqDatabase } from './FAQDatabase';
import FAQItem from './FAQItem';

const Wrapper = styled.div`
  h2{
    text-align: center;
  }

  ul{
    width: 100%;
    margin: 0 auto;
  }
`;

const FAQ = () => {


  
  return (
    <Wrapper>
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
