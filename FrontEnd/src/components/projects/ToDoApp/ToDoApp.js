import React, { useState } from 'react'
import styled from 'styled-components'
import SubmitBar from './SubmitBar'
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from 'uuid'


const ToDoApp = () => {
  const todos = [
    { id: uuidv4(), name: 'Go to the supermarket', complete: false },
    { id: uuidv4(), name: 'Call Alice', complete: false },
    { id: uuidv4(), name: 'Ask Alice to call Bob', complete: false },
    { id: uuidv4(), name: 'Do the dishes', complete: false },
    { id: uuidv4(), name: 'Change car tyres', complete: false },
  ]

  const [todoList, setNewtodoList] = useState(todos)

  const addTask = (todo) => {
    const todosCopy = [todo, ...todoList]
    setNewtodoList(todosCopy)
  }

  const toggleComplete = (id, complete) => {
    const taskIndex = todoList.findIndex((todo) => todo.id === id)
    const todosCopy = [...todoList]
    todosCopy[taskIndex].complete = complete
    setNewtodoList(todosCopy)
  }

  const onRemoveClick = (id) => {
    const newtodoList = todoList.filter((task) => task.id !== id)
    setNewtodoList(newtodoList)
  }

  return (
    <>
        <ToDoListContainer>
          <SubmitBar addTask={addTask} />
          {todoList.map((task) => (
            <li key={task.id}>
              <TodoItem
                id={task.id}
                name={task.name}
                complete={task.complete}
                toggleComplete={toggleComplete}
                onRemoveClick={onRemoveClick}
              />
            </li>
          ))}
        </ToDoListContainer>
    </>
  )
}

// styles

const ToDoListContainer = styled.div`
display: flex;
flex-direction: column;
flex: auto;
width: 19rem;
list-style: none;  
padding: 0;
`
export default ToDoApp
