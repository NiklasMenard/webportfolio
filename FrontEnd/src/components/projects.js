import React from 'react'
import './projects.css'

const Projects = () => {

    const project = [
        {name:'Project1'},
        {name:'Project2'},
        {name:'Project3'},
        {name:'Project4'},
        {name:'Project5'},
        {name:'Project6'},
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