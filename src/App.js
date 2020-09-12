import React from 'react';
import './app.css'
import Header from './components/header';
import Main from './components/main';
import Contact from './components/contact';

const App = () => {

  return (
    <div class="page-wrapper">
      <header class="page-header">
        <Header header />
      </header>
      <main class="page-main">
        <Main main />
      </main>
      <contact>
        <Contact contact />
      </contact>
    </div>
  )
}

export default App;