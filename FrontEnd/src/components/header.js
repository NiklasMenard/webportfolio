import React from 'react'
import './header.css'
import { Link } from "react-router-dom"

const Header = ({ headerButtonPressed, buttonToggled }) => {

  return (
    <div className="page-header">
      <ul>
        <li>
          <Link to="/about">
            <button onClick={() => headerButtonPressed(!buttonToggled)}>About</button>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <button onClick={() => headerButtonPressed(!buttonToggled)}>Projects</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button onClick={() => headerButtonPressed(!buttonToggled)}>Contact</button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header