import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => (
  <HeaderContainer>
    <ul>
      <li>
        <Link to="/about">
          <button type="button">About</button>
        </Link>
      </li>
      <li>
        <Link to="/projects">
          <button type="button">Projects</button>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <button type="button">Contact</button>
        </Link>
      </li>
    </ul>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
align-self: center;
padding: 2rem;
ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  
li {
  margin-right: 1rem;
}

button {
  border: 1px solid #1a202c;
  padding: 8px;
  min-width: 64px;   
  border-radius: 0.5rem;
}
`;
export default Header;
