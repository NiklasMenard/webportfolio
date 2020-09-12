import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div>
            <header class="page-header">
                <nav>
                    <ul>
                        <li><a href="about">About</a></li>
                        <li><a href="resume">Resume</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}

export default Header