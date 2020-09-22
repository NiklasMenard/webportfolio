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

    const headerButtonPressed = (toggle, button) => {
        if(buttonPressed !== button){
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
                <CSSTransition
                    in={buttonToggled}
                    timeout={300}
                    classNames="center-element-transition">
                    <div className="center-element">
                        <About />
                    </div>
                </CSSTransition>
            </div>
        )
    }

    if (buttonPressed === "Projects") {

        return (

            <div className="main-wrapper">
                <div className="page-header">
                    <Header headerButtonPressed={headerButtonPressed} buttonToggled={buttonToggled}/>
                </div>
                <CSSTransition
                    in={buttonToggled}
                    timeout={300}
                    classNames="center-element-transition">
                    <div className="center-element">
                        <Projects />
                    </div>
                </CSSTransition>
            </div>
        )
    }

    if (buttonPressed === "Contact") {

        return (

            <div className="main-wrapper">
                <div className="page-header">
                    <Header headerButtonPressed={headerButtonPressed} buttonToggled={buttonToggled} />
                </div>
                <CSSTransition
                    in={buttonToggled}
                    timeout={300}
                    classNames="center-element-transition">
                    <div className="center-element">
                        <Contact />
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

export default App