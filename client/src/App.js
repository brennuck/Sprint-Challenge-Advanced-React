import React from 'react';

import PlayerList from './Components/PlayerList';
import GoinDark from './Components/GoinDark';

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <GoinDark />
      <PlayerList />
    </div>
  )
}

export default App;
