import React from 'react'
import './contact.css'
import profilepic from './profilepic.jpg'

const Contact = () => {

    return (
        <div class="contact-container">
            <picture class="profilepicture">
                <img src={profilepic} alt="" />
            </picture>
            <h1>Test</h1>
        </div>

    )
}

export default Contact