import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';


const ProjectItem = ({ name, description, linkTo, demo, code }) => {
    return (
        <ItemWrapper>
            <h3>{name}</h3>
            <p>{description}</p>
            {demo ?
                (<ButtonContainer>
                    <Link to={`${linkTo}`}>
                        <button>Demo</button>
                    </Link>
                     <a href={code}><button>Code</button></a>
                </ButtonContainer>)
                :
                (<ButtonContainer>
                   <a href={code}><button>Code</button></a>
                </ButtonContainer>)}
        </ItemWrapper>
    )
}

const ButtonContainer = styled.div`
align-self: center;
margin-top: 1rem;
margin-bottom: 1rem;
button {
    margin-left: 1rem;
}
`

const ItemWrapper = styled.div`
display: flex;
flex-direction: column;
h3, p {
    align-self: center;
    margin-left: 0.75rem;

}
`

export default ProjectItem