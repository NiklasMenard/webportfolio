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
    <HeaderContainer height={location}>
      <LeftContainer />
      <Logo />
      <RightContainer />
      <ShoppingCart to={`${url}/shopping-cart`}>
        <FaShoppingCart />
      </ShoppingCart>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  background: #b6d5e1;
  height: 35rem;
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
@media (max-width:  ${(props) => props.theme.maxWidth}) {
  font-size 2rem;
}
`;

const Logo = styled.div`
  height: 25rem;
  width: 25rem;
  align-self: center;
  flex: 1;
  background: url(${StoreLogo}) no-repeat center / cover;
  @media (max-width:  ${(props) => props.theme.maxWidth}) {
    margin-top: 2rem;
    flex: 2;
    height: 15rem;
    width: 15rem;
    order: 1;
  }
`;

export default Header;
