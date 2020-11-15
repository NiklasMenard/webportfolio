import styled from 'styled-components';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import Background from './resources/bkimage.png';
import RouterViews from './utils/viewrouter';
import GlobalStyle from './styles/globalstyle';

const App = () => (

  <Router>
    <GlobalStyle />
    <MainWrapper>
      <Header />
      <CenterComponent>
        <RouterViews />
      </CenterComponent>
    </MainWrapper>
    <Footer />
  </Router>

);

// styles
const MainWrapper = styled.div`
display: flex;
flex-flow: column;
background: url(${Background}) no-repeat center / cover;
border-radius: 1rem;
min-height: 98vh;
`;

const CenterComponent = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 85vh;
@media only screen  and (min-width : 3840px) {
  min-height: 90vh;
  }
  
@media (max-width: 600px) {
  min-height: 125vh;
}

`;
export default App;
