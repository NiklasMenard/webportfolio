/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import ProductItem from "./productItem";

const ProductListItems = ({ productsToShow, AddorRemove, buttonName }) => {

  return (
    <ListContainer>
    {productsToShow.map((product) => (
      <ListStyle key={product.product_id}>
        <ProductItem
          product={product}
          AddorRemove={AddorRemove}
          buttonName={buttonName}
        />
      </ListStyle>
    ))}
  </ListContainer>
  )
}

const ListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ListStyle = styled.div`
  list-style: none;
  margin: 2rem;
  background-color: #f6f6f6;
  height: 40rem;
  width: 30rem;

  @media (max-width: 600px) {
    height: 35rem;
    width: 25rem;
  }
`;

export default ProductListItems;
