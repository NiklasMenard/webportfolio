import React from 'react'
import './header.css'

const Header = (props) => {

    return (
        <div>
                <ul>
                    <li><a href="about">About</a></li>
                    <li><a href="resume">Resume</a></li>
                    <li><a href="contact" onClick = {() => props.contactClicked}  >Contact</a></li>
                </ul>
        </div>
    )
}

export default Header