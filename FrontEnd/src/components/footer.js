import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import ProfilePicture from '../resources/profilepic.png';

const Footer = () => (
  <FooterContainer>
    <img src={ProfilePicture} alt="profpic" />
    <SkillsBox>
      <h3>What do I offer</h3>
      <p>
        I am a problem solver with a background in marketing, sales and finance.
        My main focus currently is fullstack web and mobile development.
      </p>
      <p>
        My biggest strength is that im not only a programmer but somebody who
        has a thorough understanding of customer needs and how to answer them.
      </p>
      <p>
        Feel free to
        <HashLink to="/contact#top">contact</HashLink>
        me for a CV and check out my
        <HashLink to="/projects#top">work.</HashLink>
      </p>
    </SkillsBox>
  </FooterContainer>
);

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4rem;
  justify-content: center;
  img {
    border-radius: 1rem;
    margin-right: 1rem;
  }
  h3,
  p {
    margin-left: 1rem;
  }
`;

const SkillsBox = styled.div`
  width: 35rem;
  a {
    font-weight: bolder;
    padding: 0.5rem;
  }
`;

export default Footer;
