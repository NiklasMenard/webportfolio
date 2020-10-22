import React from 'react'
import './projectlist.css'
import ProjectItem from'./projectitem'


const ProjectList = ({ headerButtonPressed, buttonToggled }) => {


    return (
        <div className="project-box">
            <div className="project-list">
                <li>
                    <ProjectItem headerButtonPressed={headerButtonPressed} buttonToggled={buttonToggled} />
                </li>
                <li>
                    <ProjectItem headerButtonPressed={headerButtonPressed} buttonToggled={buttonToggled} />
                </li>                          
            </div>
        </div>
    )
}

export default ProjectList