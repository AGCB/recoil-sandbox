import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [contrast, setContrast] = React.useState(true);

  return (
    <div className={`app ${contrast? 'light':'dark'}-mode`}>
      <h1>playing-with-recoil</h1>
      <button onClick={e => {
          setContrast(!contrast)
        }}>TOGGLE CONTRAST</button>
  </div>
  );
}

export default App;
