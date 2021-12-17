import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const WrapperContainer = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 350,
    },
  },
  closed: {
    opacity: 0,
  },
});
const Container = styled(WrapperContainer)`
  color: #fff;
  display: grid;
  place-items: center;
  height: 80vh;
`;

const BookingSummary = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isBooked] = React.useState(
    localStorage.getItem('booking') !== null
      ? JSON.parse(localStorage.getItem('booking')).paid
      : false
  );

  React.useEffect(() => {
    // fire enter animations
    setIsOpen(true);
  }, []);
  return (
    <Container pose={isOpen ? 'open' : 'closed'}>
      {isBooked ? (
        <h1>Thank you for your pay {':-]'}</h1>
      ) : (
        <h1>Please make a booking and pay for it.</h1>
      )}
    </Container>
  );
};

export default BookingSummary;
