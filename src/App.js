import React, { useState } from 'react';
import './app.css'

import Main from './components/main';
import Contact from './components/contact';

const App = () => {

  const [contact, setContact] = useState(false)

  const handleClick = (clicked) => {
    setContact(clicked)
    console.log(clicked)
  }

  if(contact){
      return(
      <Contact id="page-contact" />
    )
  }

  return (

    <div>
      <Main handleClick={handleClick} />

    </div>

  )
}

export default App;