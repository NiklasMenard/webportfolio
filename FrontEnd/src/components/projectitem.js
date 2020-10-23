import React from 'react'
import { Link } from "react-router-dom";


const ProjectItem = ({name, description, linkTo}) => {
    return (
        <>  
            <h3>{name}</h3>
            <p>{description}</p>
            <Link to={`${linkTo}`}>
                <button>Demo</button>
            </Link>
            <button>Code</button>
        </>
    )
}

export default ProjectItem