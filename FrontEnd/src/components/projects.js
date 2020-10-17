import React from 'react'
import './projects.css'

const Projects = () => {

    const project = [
        {name:'Coming soon'},
    ]

    return (
        <div className="project-box">
            <div className="project-list">
                <ul>
                    {project.map(p => <li key={p.name}>{p.name}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Projects