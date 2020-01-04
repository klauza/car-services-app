import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  border: 1px solid grey;
`;
const FAQItem = ({faq}) => {
  return (
    <Wrapper key={faq.id}>
      {faq.content}
    </Wrapper>
  )
}

export default FAQItem
