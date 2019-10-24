import React, { useState } from 'react';
import InfiniteList from './InfiniteList';
import './App.css';

function App() {
  const [state, setState] = useState([]);
  
  return (
    <div className="App">
      <InfiniteList 
        state={state}
        setState={setState}
      />
    </div>
  );
}

export default App;
