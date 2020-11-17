/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import styled from "styled-components";
import pictureArray from "../utils/pictureArray";
import useDetectOutsideClick from "../utils/detectClickedOutside";

const ProductItem = ({ product, AddorRemove, buttonName }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const dropDownClick = () => setIsActive(!isActive);

  const [size, setSize] = useState("Select Size");
  const selectSize = (size) => {
    setSize(size);
    setIsActive(false);
  };

  return (
    <ItemWrapper>
      <ProductName>{product.name}</ProductName>
      <ProductPicture src={pictureArray[product.picture_key].picture} alt="" />

      <ProductButton type="button" onClick={() => AddorRemove(product)}>
          {buttonName}
      </ProductButton>

      <ProductButton type="button" onClick={() => dropDownClick(!isActive)}>
        {size}
      </ProductButton>
      <DropDownContent ref={dropdownRef} isActive={isActive}>
        {product.sizes.map((size, i) => (
          <li key={i}>
            <button type="button" onClick={() => selectSize(size)}>
              {size}
            </button>
          </li>
        ))}
      </DropDownContent>
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
  width: 15rem;
  margin: 0.5rem;
`;

const DropDownContent = styled.div`
  display: ${(props) => !props.isActive && "none"};
  button {
    width: 8rem;
  }
`;

export default ProductItem;
