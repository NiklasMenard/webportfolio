import React from 'react'
import './projectlist.css'
import { v4 as uuidv4 } from 'uuid'
import ProjectItem from './projectitem'


const ProjectList = ({ headerButtonPressed, buttonToggled }) => {

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
        <div className="project-box">
            <div className="project-list">
                {projects.map((project) => (
                    <li key={project.id}>
                        <ProjectItem
                            id={project.id}
                            name={project.name}
                            description={project.description}
                            linkTo={project.linkTo} 
                            headerButtonPressed={headerButtonPressed}
                            buttonToggled={buttonToggled}
                        />
                    </li>
                ))}
            </div>
        </div>
    )
}

export default ProjectList