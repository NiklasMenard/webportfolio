import React, { useState } from 'react'
import styled from 'styled-components'
import SubmitBar from './submitbar'
import TodoItem from './todoitem'
import { v4 as uuidv4 } from 'uuid'
import TransitionEffect from '../../../styles/transitioneffect'
import { motion, AnimatePresence } from "framer-motion"

const ToDoApp = () => {
  const todos = [
    { id: uuidv4(), name: 'Walk the dog', complete: false },
    { id: uuidv4(), name: 'Get groceries', complete: false },
    { id: uuidv4(), name: 'Go to the pharmacy', complete: false },
    { id: uuidv4(), name: 'Cook dinner', complete: false },
    { id: uuidv4(), name: 'Return book to the library', complete: false },
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
    <TransitionEffect>
      <ToDoListContainer>
        <SubmitBar addTask={addTask} />
        <AnimatePresence>
        {todoList.map((task) => (
               <motion.li
               key={task.id}
               initial = {{ opacity: 0 }}
               animate = {{ opacity: 1 }}
               exit = {{ opacity: 0 }}
             >
            <TodoItem
              id={task.id}
              name={task.name}
              complete={task.complete}
              removed={task.removed}
              toggleComplete={toggleComplete}
              onRemoveClick={onRemoveClick}
            />
          </motion.li>
        ))}
        </AnimatePresence>
      </ToDoListContainer>
    </TransitionEffect>

  )
}

// styles

const ToDoListContainer = styled.div`
display: flex;
flex-direction: column;
list-style: none;
margin-bottom: 2rem;
@media (max-width: 600px) {
  width: 18rem;
  }
`
export default ToDoApp
