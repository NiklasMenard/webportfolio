import React from 'react'
import './footer.css'
import ProfilePicture from './images/profilepic.png';
import { Link } from "react-router-dom"


const Footer = ({headerButtonPressed, buttonToggled}) => {

    return (
        <div className="footer-container">
            <img src={ProfilePicture} alt="profpic" />
            <div className="skills-box">
                <h3>What do I offer</h3>
                <p>
                    I am a problem solver with a background in marketing, sales and finance.
                    My main focus currently is web and mobile development and
                </p>
                <p>
                Feel free to
                <Link to="/contact" onClick={() => headerButtonPressed(!buttonToggled)}> contact </Link>
                me and check out my
                <Link to="/projects" onClick={() => headerButtonPressed(!buttonToggled)}> work </Link>
                </p>
            </div>
        </div>
    )
}

export default Footer