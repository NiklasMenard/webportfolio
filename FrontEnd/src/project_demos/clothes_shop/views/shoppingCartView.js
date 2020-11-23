import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductListItems from '../components/productListItems';
import { removeCartItem, decreaseQuantity } from '../reducers/shoppinCartReducer';

const ShoppingCartView = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.shoppingCart.cart_products);

  const removeProductFromCart = (selectedProduct) => {
    // check if product in cart and quantity > 0
    if (productsInCart.some((product) => product.sizes[0].detail_key === selectedProduct.detail_key
      && product.quantity > 1)) {
      dispatch(decreaseQuantity(selectedProduct.detail_key));
    } else {
      dispatch(removeCartItem(selectedProduct.detail_key));
    }
  };

  return (
    <ShoppingCartViewContainer>
      <h1>Products in Shopping Cart</h1>
      <p>(For demo purposes shopping cart is linked to the database but it is not
        linked to a user account. Because of this the view is not unique between
        visitors)</p>
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
