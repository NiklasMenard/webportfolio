import React from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { categoryChange } from '../reducers/productViewReducer';

const LeftHeaderContainer = () => {
  const location = useLocation();
  const { url } = useRouteMatch();
  
  const dispatch = useDispatch();
  const category = useSelector((state) => state.productView.category);
  const changeCategory = (categoryObject) => {
    dispatch(categoryChange(categoryObject));
  };
  
  return (
    <LeftContainer visible={location}>
      <UpperCategoryBox>
        <HeaderLink
          to={`${url}/mens-clothing`}
          selected={[category.genderCategory, 'Men']}
          onClick={() => changeCategory({
            genderCategory: 'Men',
            productCategory: '',
            featured: '',
          })}
        >
          Men
        </HeaderLink>
        <HeaderLink
          to={`${url}/womens-clothing`}
          selected={[category.genderCategory, 'Women']}
          onClick={() => changeCategory({
            genderCategory: 'Women',
            productCategory: '',
            featured: '',
          })}
        >
          Women
        </HeaderLink>
        <HeaderLink
          to={`${url}/featured-clothing`}
          selected={[category.featured, 'Toggled']}
          onClick={() => changeCategory({
            genderCategory: '',
            productCategory: '',
            featured: 'Toggled',
          })}
        >
          Featured
        </HeaderLink>
      </UpperCategoryBox>
      <LowerCategoryBox category={category}>
        <HeaderLink
          to={`${location.pathname}`}
          selected={[category.productCategory, 'Pants']}
          onClick={() => changeCategory({
            genderCategory: category.genderCategory,
            productCategory: 'Pants',
            featured: category.featured,
          })}
        >
          Pants
        </HeaderLink>
        <HeaderLink
          to={`${location.pathname}`}
          selected={[category.productCategory, 'Shirts']}
          onClick={() => changeCategory({
            genderCategory: category.genderCategory,
            productCategory: 'Shirts',
            featured: category.featured,
          })}
        >
          Shirts
        </HeaderLink>
        <HeaderLink
          to={`${location.pathname}`}
          selected={[category.productCategory, 'Shoes']}
          onClick={() => changeCategory({
            genderCategory: category.genderCategory,
            productCategory: 'Shoes',
            featured: category.featured,
          })}
        >
          Shoes
        </HeaderLink>
      </LowerCategoryBox>
    </LeftContainer>
  );
};

const LeftContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  justify-content: flex-end;
  @media (max-width: 1350px ) {
    width: 100%;
    order: 2;
    justify-content: none;
  }
}
`;

const HeaderLink = styled(Link)`
  margin-left: 0.5rem;
  color: black;
  text-decoration: ${(props) => (props.selected[0] === props.selected[1] ? 'underline' : 'none')};
`;

const UpperCategoryBox = styled.div`
  display: flex;
  align-self: flex-end;
  margin-right: 2rem;
  @media (max-width: 1350px ) {
    margin: 0rem;
    align-self: center;
  }
`;

const LowerCategoryBox = styled.div`
  display: flex;
  align-self: flex-end;
  margin-right: 2rem;
  margin-bottom: 2.5rem;

  opacity: ${(props) => props.category.featured === ''
    && props.category.genderCategory === ''
    && '0'};
  pointer-events: ${(props) => props.category.featured === ''
    && props.category.genderCategory === ''
    && 'none'};

  @media (max-width: 1350px ) {
    margin-right: 0rem;
    align-self: center;
  }
`;

export default LeftHeaderContainer;
