import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { newSearch } from '../reducers/productViewReducer';

const RightHeaderContainer = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.productView.newSearch);
  const location = useLocation();

  const handleSearchChange = (event) => {
    dispatch(newSearch(event.target.value));
  };

  return (
    <RightContainer visible={location}>
      <SearchBar
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search for Product"
      />
    </RightContainer>
  );
};

const RightContainer = styled.div`
display: flex;
flex-direction: row;
flex: 1;
opacity: ${(props) => props.visible.pathname === '/projects/clothes-shop/shopping-cart' && '0'};
@media (max-width:  ${(props) => props.theme.maxWidth}) {
  order: 3;
  justify-content: center;
}
`;

const SearchBar = styled.input`
align-self:flex-end;
margin-bottom: 2.5rem;
margin-left: 2rem;
width: 20rem;
@media (max-width:  ${(props) => props.theme.maxWidth}) {
  width: 15rem;
  margin-left: 1rem;
}
`;
export default RightHeaderContainer;
