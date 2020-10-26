import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion';
import SubmitBar from './submitbar';
import TodoItem from './todoitem';
import TransitionEffect from '../../../styles/transitioneffect';

const ToDoApp = () => {
  const todos = [
    { id: uuidv4(), name: 'Walk the dog', complete: false },
    { id: uuidv4(), name: 'Get groceries', complete: false },
    { id: uuidv4(), name: 'Go to the pharmacy', complete: false },
  ];

  const [todoList, setNewtodoList] = useState(todos);

  const addTask = (todo) => {
    const todosCopy = [todo, ...todoList];
    if (todosCopy.length <= 5) {
      setNewtodoList(todosCopy);
    } else {
      alert('Demo has maximum five tasks');
    }
  };

  const toggleComplete = (id, complete) => {
    const taskIndex = todoList.findIndex((todo) => todo.id === id);
    const todosCopy = [...todoList];
    todosCopy[taskIndex].complete = complete;
    setNewtodoList(todosCopy);
  };

  const onRemoveClick = (id) => {
    const newtodoList = todoList.filter((task) => task.id !== id);
    setNewtodoList(newtodoList);
  };

  return (
    <TransitionEffect>
      <ToDoListContainer>
        <SubmitBar addTask={addTask} />
        <AnimatePresence>
          {todoList.map((task) => (
            <motion.li
              key={task.id}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, x: 500 }}
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

  );
};

// styles

const ToDoListContainer = styled.div`
display: flex;
flex-direction: column;
list-style: none;
margin-bottom: 20rem;
height: 20rem;
width: 25rem;
@media (max-width: 600px) {
  width: 19rem;
  }
`;
export default ToDoApp;
