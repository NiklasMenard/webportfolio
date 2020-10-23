import Header from './components/header';
import Footer from './components/footer';
import Background from './components/images/bkimage.png'
import styled from 'styled-components';
import TransitionCenterElement from './styles/transition'
import GlobalStyle from './styles/globalstyle'
import React from 'react';


import {
    BrowserRouter as Router,
} from "react-router-dom"


const App = () => {


    return (
        <Router>
            <GlobalStyle />
            <MainWrapper>
                <Header />
                <TransitionCenterElement />
            </MainWrapper>
            <Footer/>
        </Router>
    )
}

// styles
const MainWrapper = styled.div`
display: flex;
flex-flow: column;
border-radius: 1rem;
background: url(${Background}) no-repeat center / cover;
min-height: 95vh;
`

export default App
