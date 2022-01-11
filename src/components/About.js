import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  max-width: 800px;
  width: auto;
  height: auto;
  margin: 100px auto;
  background: lightgrey;
  border: 1px solid lightgrey;
  border-radius: 3px;
  box-shadow: 0 3px 4px -1px rgba(0, 0, 0, 0.85);

  @media (max-width: 800px) {
    margin: 100px 5px;
  }
  div {
    background: #000;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    text-transform: uppercase;
  }
  p {
    padding: 5px;
    span {
      text-decoration: underline;
    }
  }
`;

const About = () => {
  return (
    <div>
      <Block>
        <div>Icons & Images</div>
        <p>
          <span>
            Icons by <strong>flaticon.com</strong>,
          </span>{' '}
          authors:{' '}
          <i>
            freepik, gregor-cresnar, eucalyp, Pixel-perfect, pixel-buddha, Those
            Icons, Smashicons, Nikita Golubev
          </i>
        </p>
        <p>
          <span>
            Images by <strong>pexels.com</strong>
          </span>
        </p>
      </Block>

      <Block>
        <div>Website owner</div>
        <p>
          Website was created for educational purposes by independent coder.
        </p>
      </Block>

      <Block>
        <div>Terms of conditions</div>
        <p>
          By using this website you agree to store cookies in your browser.
          Thsese cookies are used to create an object necessary to make a
          booking.
        </p>
      </Block>
    </div>
  );
};

export default About;
