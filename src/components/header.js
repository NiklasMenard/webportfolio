import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="about">About</a></li>
                    <li><a href="resume">Resume</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header