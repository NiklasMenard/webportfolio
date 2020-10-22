import React from 'react'
import './footer.css'
import ProfilePicture from './images/profilepic.png';
import { HashLink } from 'react-router-hash-link'


const Footer = ({ headerButtonPressed, buttonToggled }) => {

    return (
        <div className="footer-container">
            <img src={ProfilePicture} alt="profpic" />
            <div className="skills-box">
                <h3>What do I offer</h3>
                <p>
                    I am a problem solver with a background in marketing, sales and finance.
                    My main focus currently is fullstack web and mobile development.
                </p>
                <p>
                    My biggest strength is that im not only a programmer but somebody who has a
                    thorough understanding of customer needs and how to answer them.
                </p>
                <p>
                    Feel free to
                    <HashLink to="/contact#top" onClick={() => headerButtonPressed(!buttonToggled)}>contact</HashLink>
                    me and check out my
                    <HashLink to="/projects#top" onClick={() => headerButtonPressed(!buttonToggled)}>work</HashLink>
                </p>
            </div>
        </div>
    )
}

export default Footer