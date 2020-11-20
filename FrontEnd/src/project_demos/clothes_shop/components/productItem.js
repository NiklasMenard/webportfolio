/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import pictureArray from "../utils/pictureArray";
import useDetectOutsideClick from "../utils/detectClickedOutside";

const ProductItem = ({ product, AddorRemove, buttonName }) => {

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const dropDownClick = () => setIsActive(!isActive);
  const [selectedProduct, setProduct] = useState({
    detail_key: null,
    size: "Select Size",
  });

  const location = useLocation();
  const selectSize = (key, selected_drop_down_size) => {
    setProduct({ detail_key: key, size: selected_drop_down_size });
    setIsActive(false);
  };

  return (
    <ItemWrapper>
      <ProductName>{product.name}</ProductName>
      <ProductPicture src={pictureArray[product.picture_key].picture} alt="" />

      <ProductButton
        type="button"
        onClick={() => AddorRemove(selectedProduct)}
      >
        {buttonName}
      </ProductButton>

      {location.pathname === "/projects/clothes-shop/shopping-cart" ? (
        <p>Selected size {product.sizes[0].size}</p>
      ) : (
        <div>
          <ProductButton type="button" onClick={() => dropDownClick(!isActive)}>
            {selectedProduct.size}
          </ProductButton>

          <DropDownSizes ref={dropdownRef} isActive={isActive}>
            {product.sizes.map((product_detail) => (
              <li key={product_detail.detail_key}>
                <button
                  type="button"
                  onClick={() =>
                    selectSize(product_detail.detail_key, product_detail.size)
                  }
                >
                  {product_detail.size}
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
  display: ${(props) => !props.isActive && "none"};
  button {
    width: 14rem;
    border-top: none;
    border-radius: 0;
  }
`;

export default ProductItem;
