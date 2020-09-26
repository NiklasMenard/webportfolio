import './app.css'
import Header from './components/header';
import Contact from './components/contact';
import About from './components/about';
import Projects from './components/projects';

import React, { useState, useEffect } from 'react';
import { CSSTransition } from "react-transition-group";

const App = () => {

    const [buttonPressed, setButton] = useState("About")
    const [buttonToggled, setToggle] = useState(false)

    const transitionComponent = (component) => {
        return (
            <CSSTransition
                in={buttonToggled}
                timeout={300}
                classNames="center-element-transition">
                <div className="center-element">
                    {component}
                </div>
            </CSSTransition>
        )
    }

    const headerButtonPressed = (toggle, button) => {
        if (buttonPressed !== button) {
            setToggle(toggle)
            setButton(button)
        }
    }

    useEffect(() => {
        setToggle(true)
    }, [buttonPressed])


    if (buttonPressed === "About") {

        return (

            <div className="main-wrapper">
                <div className="page-header">
                    <Header headerButtonPressed={headerButtonPressed} buttonToggled={buttonToggled} />
                </div>
                {transitionComponent(<About />)}
            </div>
        )
    }

    if (buttonPressed === "Projects") {

        return (

            <div className="main-wrapper">
                <div className="page-header">
                    <Header headerButtonPressed={headerButtonPressed} buttonToggled={buttonToggled} />
                </div>
                {transitionComponent(<Projects />)}
            </div>
        )
    }

    if (buttonPressed === "Contact") {

        return (

            <div className="main-wrapper">
                <div className="page-header">
                    <Header headerButtonPressed={headerButtonPressed} buttonToggled={buttonToggled} />
                </div>
                {transitionComponent(<Contact />)}
            </div>
        )
    }
}

export default App