import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi'
import { BsTrashFill } from 'react-icons/bs'

const TodoItem = ({ id, name, complete, toggleComplete, onRemoveClick }) => (
  <TodoItemBar complete={complete}>
    <h3>{name}</h3>
    <IconContainer>
      {complete ? (
        <BiCheckboxChecked
          onClick={() => toggleComplete(id, !complete)}
        ></BiCheckboxChecked>
      ) : (
        <BiCheckbox onClick={() => toggleComplete(id, !complete)}></BiCheckbox>
      )}
      <BsTrashFill onClick={() => onRemoveClick(id)}></BsTrashFill>
    </IconContainer>
  </TodoItemBar>
)

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
}

// styles

const TodoItemBar = styled.div`
  display: flex;
  flex: 1 0 auto;
  border-radius: 1rem;
  border-style: solid;
  border-color: black;
  margin-bottom: 1rem;
  background: ${({ complete }) => (complete ? '#a8f0b3' : '#eef7a3')};
  h3 {
    align-self: center;
    flex: 1 0 50%;
    padding: 1rem;
    color: black;
    max-width: 25rem;
    overflow-wrap: break-word;
  }
`

const IconContainer = styled.div`
  align-self: center;
  padding-right: 1rem;
  font-size: 2rem;
`

export default TodoItem
