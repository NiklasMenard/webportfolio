import React, { useState } from 'react';
import './app.css'

import Main from './components/main';


const App = () => {

  const [contact, setContact] = useState([""])

  const handleClick = (clicked) => {
    setContact(clicked)
    console.log(clicked)
  }

  return (
    <div>
      <Main handleClick={handleClick}
        contact={contact} />
    </div>
  )
}

export default App;