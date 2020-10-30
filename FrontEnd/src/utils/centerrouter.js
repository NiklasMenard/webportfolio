import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Contact from '../components/contact';
import About from '../components/about';
import ProjectList from '../components/projectlist';
import ToDoApp from '../components/project_demos/todoapp/todoapp';

const TransitionCenterElement = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/about" component={About} exact />
        <Route path="/projects/todoapp" component={ToDoApp} exact />
        <Route path="/projects" component={ProjectList} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/" component={About} exact />
      </Switch>
    </AnimatePresence>

  );
};

export default TransitionCenterElement;
