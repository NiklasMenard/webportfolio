import React from 'react';
import styled from 'styled-components';
import { useLocation, Link, useRouteMatch } from 'react-router-dom';
import StoreLogo from '../resources/header_logo.png';
import LeftContainer from './leftHeaderContainer';
import RightContainer from './rightHeaderContainer';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const { url } = useRouteMatch();

  return (
    <HeaderContainer>
      <LeftContainer />
      <Logo />
      <RightContainer />
      <ShoppingCart  visible={location} to={`${url}/shopping-cart`}>
        <FaShoppingCart />
      </ShoppingCart>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  background: #b6d5e1;
  position: relative;
  @media (max-width:  ${(props) => props.theme.maxWidth}) {
    flex-flow: column wrap;
  }
`;

const ShoppingCart = styled(Link)`
color: inherit;
margin: 1rem;
font-size: 3rem;
top:0;
right:0;
position:absolute;
opacity: ${(props) => props.visible.pathname === '/projects/clothes-shop/shopping-cart' && '0'};
pointer-events: ${(props) => props.visible.pathname === '/projects/clothes-shop/shopping-cart' && 'none'};
@media (max-width:  ${(props) => props.theme.maxWidth}) {
  font-size 2rem;
}
`;

const Logo = styled.div`
  height: 25rem;
  width: 25rem;
  align-self: center;
  flex: none;
  background: url(${StoreLogo}) no-repeat center / cover;
  @media (max-width:  ${(props) => props.theme.maxWidth}) {
    margin-top: 2rem;
    height: 10rem;
    width: 10rem;
    order: 1;
  }
`;

export default Header;
