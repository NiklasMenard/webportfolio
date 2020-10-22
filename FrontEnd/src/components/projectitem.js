import React from 'react'
import { Link } from "react-router-dom"


const ProjectItem = props => {
    return (
        <>  
            <h3>To Do App</h3>
            <Link to="/projects/todoapp">
                <button onClick={() => props.headerButtonPressed(!props.buttonToggled)}>Demo</button>
            </Link>
            <button onClick={() => props.headerButtonPressed(!props.buttonToggled)}>Code</button>
        </>
    )
}

export default ProjectItem