import Header from './components/header';
import Footer from './components/footer';
import Background from './components/images/bkimage.png'
import styled from 'styled-components';
import CenterElementRouter from './router/centerrouter'
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
                <CenterComponent>
                    <CenterElementRouter />
                </CenterComponent>
            </MainWrapper>
            <Footer />
        </Router>
    )
}

// styles
const MainWrapper = styled.div`
display: flex;
flex-flow: column;
background: url(${Background}) no-repeat center / cover;
min-height: 90vh;
border-radius: 1rem;
@media (max-width: 600px) {
    min-height: 130vh;
}
`

const CenterComponent = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media (min-width: 600px) {
    height: 90vh;
}
@media (max-width: 600px) {
    min-height: 90vh;
}
`
export default App
