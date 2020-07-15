import React from 'react';
import logo from './logo.svg';
import './App.css';


function HolaMundo(name,age){
   var pres= (<div><h1>Hello, I'm {name}</h1>
   <h2>And I'm {age} years old</h2></div>)

return pres;
}

function App() {
  var name= "Isabel"
  var age=26
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {HolaMundo(name,age)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
