import './App.css'
import Header from './components/header';
import Contact from './components/contact';
import About from './components/about';
import Projects from './components/projects';

import React, { useState, useEffect } from 'react';
import { CSSTransition } from "react-transition-group";

import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom"

const transitionComponent = (component, buttonToggled) => {
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

const App = () => {

    const [buttonToggled, setToggle] = useState(false)

    const headerButtonPressed = (toggle, button) => {
            setToggle(toggle)
    }

    useEffect(() => {
        setToggle(true)
    }, [buttonToggled])

    return (
        <Router>
            <div className="main-wrapper">
                <div className="page-header">
               <Header headerButtonPressed = {headerButtonPressed} buttonToggled={buttonToggled}/>
                </div>
                <Switch>
                    <Route path="/about">
                        {transitionComponent(<About />, buttonToggled)}
                    </Route>
                    <Route path="/projects">
                        {transitionComponent(<Projects />, buttonToggled)}
                    </Route>
                    <Route path="/contact">
                        {transitionComponent(<Contact />, buttonToggled)}
                    </Route>
                    <Route path="/">
                        {transitionComponent(<About />, buttonToggled)}
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
