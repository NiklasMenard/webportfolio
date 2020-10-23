import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import styled from 'styled-components';
import {AnimatePresence} from 'framer-motion'

import Contact from '../components/contact';
import About from '../components/about';
import ProjectList from '../components/projectlist';
import ToDoApp from '../components/projects/todoapp/todoapp';


const TransitionCenterElement = () => {

    const location = useLocation()

    return (
        <CenterElement>
            <AnimatePresence exitBeforeEnter>
            <Switch location= {location} key = {location.key}>
                <Route path="/about" component={About} exact />
                <Route path="/projects/todoapp" component={ToDoApp} exact />
                <Route path="/projects" component={ProjectList} exact />
                <Route path="/contact" component={Contact} exact />
                <Route path="/" component={About} exact />
            </Switch>
            </AnimatePresence>
        </CenterElement>
    )
}

export default TransitionCenterElement

const CenterElement = styled.div`
display: flex;
margin: auto;
justify-content: center;
`
