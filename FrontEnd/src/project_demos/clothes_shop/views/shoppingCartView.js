import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductListItems from '../components/productListItems';
import { removeCartItem } from '../reducers/shoppinCartReducer';

const ShoppingCartView = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.shoppingCart.cart_products);

  const removeProductFromCart = (product) => {
    dispatch(removeCartItem(product.product_id));
  };

  return (
    <ShoppingCartViewContainer >
      <h1>Products in Shopping Cart</h1>
      <Link to="/projects/clothes-shop">
        <button type="button">
          Go back to shopping
        </button>
      </Link>
      <ProductListItems
        productsToShow={productsInCart}
        AddorRemove={removeProductFromCart}
        buttonName="Remove from Cart"
      />
    </ShoppingCartViewContainer>
  );
};

export default ShoppingCartView;

const ShoppingCartViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  height: inherit;
  overflow-y: auto;
  text-align: center;
`;
