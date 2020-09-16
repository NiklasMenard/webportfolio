import React from 'react'
import './header.css'

const Header = ({ headerButtonPressed }) => {

    return (
        <div>
            <ul>
                <li><button onClick={() => headerButtonPressed("About")}>About</button></li>
                <li><button onClick={() => headerButtonPressed("Projects")}>Projects</button></li>
                <li><button onClick={() => headerButtonPressed("Contact")}>Contact</button></li>
            </ul>
        </div>
    )
}

export default Header