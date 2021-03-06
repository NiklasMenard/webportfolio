/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import pictureArray from '../utils/pictureArray';
import useDetectOutsideClick from '../utils/detectClickedOutside';

const ProductItem = ({ product, AddorRemove, buttonName }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const dropDownClick = () => setIsActive(!isActive);
  const [selectedProduct, setProduct] = useState({
    detail_key: product.sizes[0].detail_key,
    size: 'Select Size',
  });

  const location = useLocation();
  const selectSize = (key, selectedDropDownSize) => {
    setProduct({ detail_key: key, size: selectedDropDownSize });
    setIsActive(false);
  };

  return (
    <ItemWrapper>
      <ProductName>{product.name}</ProductName>
      <ProductPicture src={pictureArray[product.picture_key].picture} alt="" />

      <ProductButton type="button" onClick={() => AddorRemove(selectedProduct)}>
        {buttonName}
      </ProductButton>

      {location.pathname === '/projects/clothes-shop/shopping-cart' ? (
        <div>
          <p>
            Selected size:
            {product.sizes[0].size}
          </p>
          <p>
            Quantity:
            {product.quantity}
          </p>
        </div>
      ) : (
        <div>
          <ProductButton type="button" onClick={() => dropDownClick(!isActive)}>
            {selectedProduct.size}
          </ProductButton>

          <DropDownSizes ref={dropdownRef} isActive={isActive}>
            {product.sizes.map((productDetail) => (
              <li key={productDetail.detail_key}>
                <button
                  type="button"
                  onClick={() => selectSize(productDetail.detail_key, productDetail.size)}
                >
                  {productDetail.size}
                </button>
              </li>
            ))}
          </DropDownSizes>
        </div>
      )}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h3`
  align-self: center;
  font-size: 1.5rem;
`;

const ProductPicture = styled.img`
  align-self: center;
  height: 25rem;
  @media (max-width: 600px) {
    height: 20rem;
    width: 15rem;
  }
`;

const ProductButton = styled.button`
  align-self: center;
  width: 14rem;
  margin-top: 0.5rem;
  border-radius: 0;
`;

const DropDownSizes = styled.div`
  display: ${(props) => !props.isActive && 'none'};
  button {
    width: 14rem;
    border-top: none;
    border-radius: 0;
  }
`;

export default ProductItem;
