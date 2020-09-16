import React from 'react'
import Header from './header';
import './main.css'
import Contact from './contact';
import About from './about';

const Main = ({ handleClick, contact }) => {

    if (contact === "Contact") {
        return (
            <div className="main-wrapper">
                <header className="page-header">
                    <Header handleClick={handleClick} />
                </header>
                <div className="center-element">
                    <Contact />
                </div>
            </div>
        )
    }

    return (
        <div className="main-wrapper">
            <header className="page-header">
                <Header handleClick={handleClick} />
            </header>
            <div className="center-element">
                <About />
            </div>
        </div>
    )
}

export default Main