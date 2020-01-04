import React from 'react';
import styled from 'styled-components';
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

  const faqDatabase = [
    {
      id: 1,
      content: 'lorem-1 somethin'
    },
    {
      id: 2,
      content: 'lorem-2 nothin'
    }
  ]
  
  return (
    <Wrapper>
      <h2>Frequently Asked Questions</h2>

      <ul>
        {faqDatabase.map(faq => 
          <FAQItem faq={faq} />
        )}
      </ul>

    </Wrapper>
  )
}

export default FAQ
