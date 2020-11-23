import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Contact from '../views/contact';
import About from '../views/about';
import ProjectList from '../views/projects';

import ToDoApp from '../project_demos/todoapp/todoapp';
import ClothesWebStore from '../project_demos/clothes_shop/index';

const RouterViews = () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route exact path="/projects" component={ProjectList} />
    <Route path="/projects/clothes-shop" component={ClothesWebStore} />
    <Route path="/projects/todoapp" component={ToDoApp} />
    <Route path="/contact" component={Contact} />
    <Route path="/" component={About} />
  </Switch>
);

export default RouterViews;
