import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const SubmitHandler = ({ addTask }) => {
  const [newTodo, setNewTodo] = useState('')

  const handleTaskChange = (event) => {
    setNewTodo(event.target.value)
  }

  const createTask = (event) => {
    event.preventDefault()
    if (newTodo) {
      addTask({
        id: uuidv4(),
        name: newTodo,
        complete: false,
        removed: false
      })
      setNewTodo('')
    }
  }

  return (
    <SubmitBar>
      <form onSubmit={createTask}>
        <input
          placeholder="Add new todo"
          value={newTodo}
          onChange={handleTaskChange}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </SubmitBar>
  )
}

SubmitHandler.propTypes = {
  addTask: PropTypes.func.isRequired,
}

// styles

const SubmitBar = styled.div`
flex: 1 0 auto;

  form {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
  }
  input {
    flex: 1;
    padding: 1rem;
    border-style: solid;
    border-color: black;
    border-radius: 0.5rem;
    }
  button {
    margin-left: 0.5rem;
    }
  }
`

export default SubmitHandler
