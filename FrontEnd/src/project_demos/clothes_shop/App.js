import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route , Switch, useRouteMatch} from 'react-router-dom';
import { initializeProducts } from './reducers/productViewReducer';

import styled, { ThemeProvider } from 'styled-components';
import TransitionEffect from '../../styles/transitioneffect';

import Header from './components/header';
import ProductView from './views/productView';
import ShoppingCartView from './views/shoppingCartView';


const App = () => {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  return (
    <TransitionEffect>
    <ThemeProvider theme={{maxWidth :'1350px'}}>
      <MainWrapper >
        <Header />
        <Switch>      
          <Route path={`${path}/mens-clothing`}> <ProductView /> </Route>
          <Route path={`${path}/womens-clothing`}> <ProductView /> </Route>
          <Route path={`${path}/featured-clothing`}> <ProductView /> </Route>
          <Route path={`${path}/shopping-cart`}> <ShoppingCartView /> </Route>
          <Route path={path}> <ProductView /> </Route>
        </Switch>
      </MainWrapper>
    </ThemeProvider>
    </TransitionEffect>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-flow: column;
  background: grey;
  height: 65rem;
  width: 75rem;
  margin-bottom: 3rem;
  h1, h3, p, ul, a {
    color: black;
  }
  @media (max-width:  ${(props) => props.theme.maxWidth}) {
    height: 50rem;
    width: 40rem;
  }
  @media (max-width: 780px) {
   
    width: 20rem;
  } 
`;

export default App;
