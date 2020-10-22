import './app.css'
import Header from './components/header';
import Contact from './components/contact';
import About from './components/about';
import ProjectList from './components/projectlist';
import Footer from './components/footer';
import ToDoApp from './components/projects/ToDoApp/ToDoApp';
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

    const [toggled, setToggle] = useState(false)

    const centerElementToggled = (toggle) => {
            setToggle(toggle)
    }

    useEffect(() => {
        setToggle(true)
    }, [toggled])

    return (
        <Router>
            <div className="main-wrapper">
               <Header headerButtonPressed = {centerElementToggled} buttonToggled={toggled}/>
                <Switch>
                    <Route path="/about">
                        {transitionComponent(<About/>, toggled)}
                    </Route>
                    <Route exact path="/projects/todoapp" component>
                        {transitionComponent(<ToDoApp/>, toggled)}
                    </Route>
                    <Route path="/projects">
                        {transitionComponent(
                        <ProjectList 
                        headerButtonPressed = {centerElementToggled} 
                        buttonToggled={toggled}/>, toggled)}
                    </Route>
                    <Route path="/contact">
                        {transitionComponent(<Contact/>, toggled)}
                    </Route>
                    <Route path="/">
                        {transitionComponent(<About />, toggled)}
                    </Route>
                </Switch>
            </div>
            <Footer headerButtonPressed={centerElementToggled} buttonToggled={toggled}/>
        </Router>
    )
}

export default App
