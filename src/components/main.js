import React from 'react'
import Header from './header';
import Contact from './contact';
import About from './about';
import './main.css'


const Main = ({ headerButtonPressed, headerButton }) => {


    if (headerButton === "Contact") {
        return (
            <div className="main-wrapper">
                <header className="page-header">
                    <Header headerButtonPressed={headerButtonPressed} />
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
                <Header headerButtonPressed={headerButtonPressed} />
            </header>
            <div className="center-element">
                <About />
            </div>
        </div>
    )
}

export default Main