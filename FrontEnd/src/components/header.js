import React from 'react'
import './header.css'
import { Link } from "react-router-dom"

const Header = ({ headerButtonPressed, buttonToggled }) => {

  return (
    <div>
      <ul>
        <li>
          <Link to="/about">
            <button onClick={() => headerButtonPressed(!buttonToggled, "about")}>About</button>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <button onClick={() => headerButtonPressed(!buttonToggled, "projects")}>Projects</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button onClick={() => headerButtonPressed(!buttonToggled, "contact")}>Contact</button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header