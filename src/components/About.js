import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  max-width: 800px;
  width: auto; height: auto; 
  margin: 100px auto;
  background: lightgrey;
  border: 1px solid lightgrey;
  border-radius: 3px;
  box-shadow: 0 3px 4px -1px rgba(0,0,0,.85);

  @media(max-width: 800px){
    margin: 100px 5px;
  }
  div{
    background: #000;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    text-transform: uppercase;
  }
  p{
    padding: 5px;
    span{
      text-decoration: underline;
    }
  }
`;

const About = () => {
  return (
    <div>
      <Block>
        <div>Icons & Images</div>
        <p><span>Icons from <strong>flaticon.com</strong>, authors: </span><i>freepik, gregor-cresnar, eucalyp, pixel-buddha</i></p>
        <p>Images from pexels</p>
      </Block>

      <Block>
        <div>Website creator</div>
        <p>Website created by <a href="https://www.linkedin.com/in/michal-klauza-b22318186/" target="_blank" rel="noopener noreferrer">Michal Klauza</a> © Copyright 2020</p>
      </Block>

      <Block>
        <div>Terms of conditions</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptas.</p>
      </Block>

     </div>
  )

}

export default About
