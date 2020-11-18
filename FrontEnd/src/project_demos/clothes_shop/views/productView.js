import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ProductListItems from '../components/productListItems';
import { newCartItem } from '../reducers/shoppinCartReducer';
import { FilterProducts, generateProductTitleText } from '../utils/productFilter';

const ProductView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.productView.category);
  const search = useSelector((state) => state.productView.newSearch);
  const products = useSelector((state) => state.productView.products);

  const addProductToCart = (product, selectedSize) => {
    if(selectedSize.size === 'Select Size'){
      alert('You must select a size before putting product in shopping cart')
    }
    const newOrder = { product_name: product.name, picture_key: product.picture_key, sizes: [selectedSize] };
    dispatch(newCartItem(newOrder));
  };

  const productsToShow = FilterProducts(search, products, category);
  return (
    <ProductViewContainer >
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
