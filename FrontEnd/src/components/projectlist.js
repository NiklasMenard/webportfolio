import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import ProjectItem from './projectitem';
import TransitionEffect from '../styles/transitioneffect';

const ProjectList = () => {
  const projects = [
    {
      id: uuidv4(),
      name: 'ToDo App',
      description: 'Simple to do App',
      linkTo: '/projects/todoapp',
      code: 'https://github.com/NiklasMenard/webportfolio/tree/master/FrontEnd/src/components/project_demos/todoapp',
      demo: true,
    },
    {
      id: uuidv4(),
      name: "Dijkstra's Algorithm",
      description: 'Simple Python implementation of Dijkstras Shortest path algorithm',
      linkTo: '',
      code: 'https://github.com/NiklasMenard/dijkstra_shortest_path',
      demo: false,
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
display: flex;
flex-direction: column;
background-color: rgba(60, 60, 60, 0.5);
border-radius: 1rem;
align-items: center;
`;

const ProjectListItems = styled.div`
li {
    list-style: none;
    margin: 1rem;
    border-style: solid;
    border-color: black;
    border-radius: 1rem;
    height: 14rem;
    width: 18rem;
    @media (max-width: 600px) {
        height: 15rem;
        width: 15rem;
    }
}
`;

export default ProjectList;
