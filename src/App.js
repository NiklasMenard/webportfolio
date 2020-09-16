import React, { useState } from 'react';
import './app.css'

import Main from './components/main';


const App = () => {

  const [headerButton, setHeaderButtonPressed] = useState([""])

  const headerButtonPressed = (clicked) => {
    setHeaderButtonPressed(clicked)
    console.log(clicked)
  }

  return (
    <div>
      <Main headerButtonPressed={headerButtonPressed}
        headerButton={headerButton} />
    </div>
  )
}

export default App;