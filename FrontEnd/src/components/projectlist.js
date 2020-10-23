import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProjectItem from './projectitem';
import TransitionEffect from '../helper/transitioneffect'
import styled from 'styled-components';


const ProjectList = () => {

    const projects = [
        {   
            id: uuidv4(),
            name: 'ToDoApp',
            description: 'Simple to do App',
            linkTo: 'projects/todoapp'
        },
        {   
            id: uuidv4(),
            linkTo: 'projects/todoapp',
            name: 'ToDoApp'
        },
        {   
            id: uuidv4(),
            linkTo: 'projects/todoapp',
            name: 'ToDoApp'
        }
    ]

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
                        />
                    </li>
                ))}
            </ProjectListItems>
        </ProjectBox>
        </TransitionEffect>
    )
}

// styles

const ProjectBox = styled.div`
display: flex;
flex-flow: column wrap;
flex: 0 1 35rem;
background-color: rgba(60, 60, 60, 0.5);
border-radius: 1rem;
margin-bottom: 2rem;
`

const ProjectListItems = styled.div`
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
  }
li {
    list-style: none;
    margin: 1.5rem;
    padding: 5rem;
    border-style: solid;
    border-color: black;  
}
`

export default ProjectList