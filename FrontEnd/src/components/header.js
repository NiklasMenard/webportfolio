import React from 'react'
import './header.css'

const Header = ({headerButtonPressed, buttonToggled}) => {

  return (
    <div>
      <ul>
        <li><button onClick={() => headerButtonPressed(!buttonToggled,"About")}>About</button></li>
        <li><button onClick={() => headerButtonPressed(!buttonToggled,"Projects")}>Projects</button></li>
        <li><button onClick={() => headerButtonPressed(!buttonToggled,"Contact")}>Contact</button></li>
      </ul>
    </div>
  )
}

export default Header