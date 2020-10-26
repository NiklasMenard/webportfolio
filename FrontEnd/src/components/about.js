import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import TransitionEffect from '../styles/transitioneffect';

const About = () => (
  <TransitionEffect>
    <TextBox>
      <h1>Hello My Name is Niklas</h1>
      <p>
        Programming started as a hobby but quickly grew to something I want to
        pursue full time and something I feel very passionate about. I feel like
        in order to be a great programmer you must have an unquenchable need to
        solve problems.
      </p>

      <p>
        Encountering roadblocks on the road to the solution is part of the
        process and ultimately that is what makes it so gratifying when you
        finally see the pieces of the puzzle lock into place.
      </p>

      <SocialMediaIcons>
        <ul>
          <li>
            <SocialIcon
              url="https://github.com/NiklasMenard"
              network="github"
              bgColor="#black"
              fgColor="white"
            />
          </li>
          <li>
            <SocialIcon
              url="https://linkedin.com/in/niklas-menard"
              network="linkedin"
              bgColor="#0e76a8"
              fgColor="#fafafa"
            />
          </li>
        </ul>
      </SocialMediaIcons>
    </TextBox>
  </TransitionEffect>
);

// styles

const TextBox = styled.div`
  display: flex;
  flex-flow: column;
  background-color: rgba(60, 60, 60, 0.5);
  padding: 2rem;
  border-radius: 1rem;
  width: 25rem;
  @media (max-width: 600px) {
    width: 15rem;
  }
`;

const SocialMediaIcons = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
  }
  ul li {
    margin-right: 1rem;
  }
`;

export default About;
