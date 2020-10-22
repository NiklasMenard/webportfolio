import Header from './components/header';
import Contact from './components/contact';
import About from './components/about';
import ProjectList from './components/projectlist';
import Footer from './components/footer';
import ToDoApp from './components/projects/todoapp/todoapp';
import Background from './components/images/bkimage.png'
import styled from 'styled-components';
import TransitionCenterElement from './styles/transition'
import GlobalStyle from './styles/globalstyle'
import React, { useState, useEffect } from 'react';


import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom"


const App = () => {

    const [toggled, setToggle] = useState(false)
    const centerElementToggled = (toggle) => {
        console.log(toggle)
        setToggle(toggle)
    }

    useEffect(() => {
        setToggle(true)
    }, [toggled])

    return (
        <Router>
            <GlobalStyle />
            <MainWrapper>
                <Header 
                    headerButtonPressed={centerElementToggled}
                    buttonToggled={toggled} />
                <Switch>
                    <Route path="/about">
                        {TransitionCenterElement(<About />, toggled)}
                    </Route>
                    <Route exact path="/projects/todoapp">
                        {TransitionCenterElement(<ToDoApp />, toggled)}
                    </Route>
                    <Route path="/projects">
                        {TransitionCenterElement(
                        <ProjectList
                        headerButtonPressed={centerElementToggled}
                        buttonToggled={toggled} />,
                        toggled)}
                    </Route>
                    <Route path="/contact">
                        {TransitionCenterElement(<Contact />, toggled)}
                    </Route>
                    <Route path="/">
                        {TransitionCenterElement(<About />, toggled)}
                    </Route>
                </Switch>
            </MainWrapper>
            <Footer 
                headerButtonPressed={centerElementToggled} 
                buttonToggled={toggled} />
        </Router>
    )
}

// styles
const MainWrapper = styled.div`
display: flex;
flex-flow: column;
border-radius: 1rem;
background: url(${Background}) no-repeat center / cover;
min-height: 95vh;
`

export default App
