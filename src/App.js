import logo from './logo.svg';
import './App.css';
import React from 'react'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from  'react-loader-spinner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Audio
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'
        />        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
