import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectItem = ({
  name, description, linkTo, demo, code,
}) => (
  <ItemWrapper>
    <TextBox>
      <h3>{name}</h3>
      <p>{description}</p>
    </TextBox>
    <ButtonContainer>
      <a href={code}>
        <button type="button">Code</button>
      </a>

      {demo && (
        <Link to={`${linkTo}`}>
          <button type="button">Demo</button>
        </Link>
      )}
    </ButtonContainer>
  </ItemWrapper>
);

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  demo: PropTypes.bool.isRequired,
  code: PropTypes.string.isRequired,
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 16rem;
  width: 17rem;
  @media (max-width: 600px) {
      height: 16rem;
      width: 15rem;
  }
`;

const TextBox = styled.div`
  margin-left: 0.75rem;
  height: 10rem;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex: 1;
  button {
    margin-left: 1rem;
  }
`;

export default ProjectItem;
