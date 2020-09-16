import React from 'react'
import './header.css'

const Header = ({ handleClick }) => {

    return (
        <div>
            <ul>
                <li><button onClick={() => handleClick("About")}>About</button></li>
                <li><button onClick={() => handleClick("Resume")}>Resume</button></li>
                <li><button onClick={() => handleClick("Contact")}>Contact</button></li>
            </ul>
        </div>
    )
}

export default Header