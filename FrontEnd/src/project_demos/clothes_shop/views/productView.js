import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ProductListItems from '../components/productListItems';
import { newCartItem, increaseQuantity } from '../reducers/shoppinCartReducer';
import { FilterProducts, generateProductTitleText } from '../utils/productFilter';

const ProductView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.productView.category);
  const search = useSelector((state) => state.productView.newSearch);
  const products = useSelector((state) => state.productView.products);
  const productsInCart = useSelector((state) => state.shoppingCart.cart_products);

  const addProductToCart = (selectedProduct) => {
    if (selectedProduct.size === 'Select Size') {
      alert('You must select a size before putting product in shopping cart');
    } else if (productsInCart.length === 10) {
      alert('Maximum amount of products in cart is 10');
    } else if (productsInCart.reduce((
      quantity, product,
    ) => quantity + product.quantity, 0) === 20) {
      alert('Maximum quantity of products in cart is 20');
    } else if (productsInCart.some(
      (product) => product.sizes[0].detail_key === selectedProduct.detail_key,
    )) {
      dispatch(increaseQuantity(selectedProduct.detail_key));
    } else {
      dispatch(newCartItem(selectedProduct.detail_key));
    }
  };

  const productsToShow = FilterProducts(search, products, category);
  return (
    <ProductViewContainer>
      <h1>{generateProductTitleText(search, category)}</h1>
      <ProductListItems
        productsToShow={productsToShow}
        AddorRemove={addProductToCart}
        buttonName="Add to Shopping Cart"
      />
    </ProductViewContainer>
  );
};

const ProductViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  height: inherit;
  overflow-y: auto;
  text-align: center;
`;

export default ProductView;
