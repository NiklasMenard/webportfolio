import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import ProjectItem from '../components/projectitem';
import TransitionEffect from '../styles/transitioneffect';

const ProjectList = () => {
  const projects = [
    {
      id: uuidv4(),
      name: 'ToDo App',
      description: 'Simple to do App using Hooks and functional components',
      linkTo: '/projects/todoapp',
      code: 'https://github.com/NiklasMenard/webportfolio/tree/master/FrontEnd/src/components/project_demos/todoapp',
      demo: true,
    },
    {
      id: uuidv4(),
      name: "E-commerce clothing shop",
      description: 'An mock up e-commerce clothes shop implemented with Redux and PostgreSQL database',
      linkTo: '/projects/clothes-shop',
      code: 'https://github.com/NiklasMenard/Clothing-Web-Store-MockUp',
      demo: true,
    },
    {
      id: uuidv4(),
      name: 'Java Random Maze Game',
      description: 'A Java game that generates a random maze each game',
      linkTo: '',
      code: 'https://github.com/NiklasMenard/random_maze_generator_game',
      demo: false,
    },
  ];

  return (
    <TransitionEffect>
      <ProjectBox>
        <ProjectListItems>
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectItem
                id={project.id}
                name={project.name}
                description={project.description}
                linkTo={project.linkTo}
                code={project.code}
                demo={project.demo}
              />
            </li>
          ))}
        </ProjectListItems>
      </ProjectBox>
    </TransitionEffect>
  );
};

// styles

const ProjectBox = styled.div`
background-color: rgba(60, 60, 60, 0.5);
border-radius: 1rem;
padding: 0.5rem;
margin-bottom: 2rem;
`;

const ProjectListItems = styled.div`
li {
    list-style: none;
    margin: 1rem;
    border-style: solid;
    border-color: black;
    border-radius: 1rem;
}
`;

export default ProjectList;
