import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from '../components/contact';
import About from '../components/about';
import ProjectList from '../components/projectlist';
import ToDoApp from '../components/project_demos/todoapp/todoapp';
import ClothesWebStore from '../components/project_demos/clothes_shop/ClothesWebStore';

const TransitionCenterElement = () => {

  return (
      <Switch >
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={ProjectList} />
        <Route path="/projects/clothes-shop" component={ClothesWebStore} />
        <Route path="/projects/todoapp" component={ToDoApp}  />
        <Route path="/contact" component={Contact}  />
        <Route path="/" component={About}  />
      </Switch>
  );
};

export default TransitionCenterElement;
