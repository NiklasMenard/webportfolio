import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route , Switch, useRouteMatch} from 'react-router-dom';
import { initializeProducts } from './reducers/productViewReducer';

import styled, { ThemeProvider } from 'styled-components';
import TransitionEffect from '../../styles/transitioneffect';
import dimension from './utils/mediaConstants';

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
    <ThemeProvider theme={dimension}>
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
  height: 75rem;
  width: 80rem;
  h1, h3, p, ul, a {
    color: black;
  }

  @media (max-width:  ${(props) => props.theme.maxWidth}) {
    height: ${(props) => props.theme.height};
    width: ${(props) => props.theme.width};
  }
`;

export default App;
