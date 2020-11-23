import React from 'react';
import styled from 'styled-components';
import { useLocation, Link, useRouteMatch } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import StoreLogo from '../resources/header_logo.png';
import LeftContainer from './leftHeaderContainer';
import RightContainer from './rightHeaderContainer';

const Header = () => {
  const location = useLocation();
  const { url } = useRouteMatch();
  const productsInCart = useSelector((state) => state.shoppingCart.cart_products);

  return (
    <HeaderContainer>
      <LeftContainer />
      <Logo />
      <RightContainer />
      <ShoppingCartBox visible={location}>
        <QuantityCounter>
          {productsInCart.reduce((quantity, product) => quantity + product.quantity, 0)}
        </QuantityCounter>
        <ShoppingCart to={`${url}/shopping-cart`}>
          <FaShoppingCart />
        </ShoppingCart>
      </ShoppingCartBox>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  background: #b6d5e1;
  position: relative;
  @media (max-width: ${(props) => props.theme.maxWidth}) {
    flex-flow: column wrap;
  }
`;

const ShoppingCartBox = styled.div`
  display: flex;
  top: 0;
  right: 0;
  position: absolute;
  margin: 1rem;
  opacity: ${(props) => props.visible.pathname === '/projects/clothes-shop/shopping-cart' && '0'};
  pointer-events: ${(props) => props.visible.pathname === '/projects/clothes-shop/shopping-cart'
    && 'none'};
`;

const ShoppingCart = styled(Link)`
color: inherit;
font-size: 3rem;
@media (max-width:  ${(props) => props.theme.maxWidth}) {
  font-size 2rem;
}
`;

const QuantityCounter = styled.p`
color: red !important;
align-self: flex-end;
`;

const Logo = styled.div`
  height: 25rem;
  width: 25rem;
  align-self: center;
  flex: none;
  background: url(${StoreLogo}) no-repeat center / cover;
  @media (max-width: ${(props) => props.theme.maxWidth}) {
    margin-top: 2rem;
    height: 10rem;
    width: 10rem;
    order: 1;
  }
`;

export default Header;
