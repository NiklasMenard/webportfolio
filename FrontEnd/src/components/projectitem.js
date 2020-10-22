import React from 'react'
import { Link } from "react-router-dom";


const ProjectItem = ({name, description, linkTo, headerButtonPressed, buttonToggled}) => {
    return (
        <>  
            <h3>{name}</h3>
            <p>{description}</p>
            <Link to={`${linkTo}`}>
                <button onClick={() => headerButtonPressed(!buttonToggled)}>Demo</button>
            </Link>
            <button onClick={() => headerButtonPressed(!buttonToggled)}>Code</button>
        </>
    )
}

export default ProjectItem