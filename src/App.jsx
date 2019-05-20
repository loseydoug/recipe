import React from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome.jsx';
import Slideout from './components/Slideout.jsx';

function App() {
  return (
    <div className="App">
{/*      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name="Doug" salutation="Mr." />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <Slideout isExpanded="false" />
    </div>
  );
}

export default App;
