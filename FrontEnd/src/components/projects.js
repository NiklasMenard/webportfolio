import React from 'react'
import './projects.css'

const Projects = () => {

    const projects = [
        "Projects coming soon",
    ]

    return (
        <div className="project-box">
            <ul>
                {projects.map((project) => (
                    <li>{project}</li>
                ))}
            </ul>
        </div>
    )
}

export default Projects