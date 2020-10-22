import React from 'react';
import { CSSTransition } from "react-transition-group";
import styled from 'styled-components';


const Transition = (component, buttonToggled) => {
    return (
        <CSSTransition
            in={buttonToggled}
            timeout={300}
            classNames="center-element-transition">
            <CenterElement>
                {component}
            </CenterElement>
        </CSSTransition>
    )
}


export default Transition


const CenterElement = styled.div`
display: flex;
margin: auto;
justify-content: center;

&.center-element-transition-enter {
    opacity: 0;
  }
&.center-element-transition-enter-active {
    opacity: 1;
    transition: opacity 1000ms, transform 1000ms;
}
`