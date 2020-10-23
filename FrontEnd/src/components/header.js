import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components';

const Header = () => {

  return (
    <HeaderContainer>
      <ul>
        <li>
          <Link to="/about">
            <button>About</button>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <button>Projects</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </li>
      </ul>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
display: flex;
align-self: center;
padding: 2rem;
ul, li {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin-right: 1rem;
  font-family:'Courier New', Courier, monospace
}
button {
  border: 1px solid #1a202c;
  padding: 8px;
  min-width: 64px;   
  border-radius: 0.5rem;
}
`
export default Header