import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  border: 1px solid grey;
`;
const FAQItem = ({faq}) => {
  return (
    <Wrapper>
      {faq.content}
    </Wrapper>
  )
}

export default FAQItem
