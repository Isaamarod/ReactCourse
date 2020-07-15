import React from 'react';
import logo from './Assets/imags/logo.svg';
import './Assets/css/App.css'

//components

import MyFirstComponent from './Components/MyFirstComponent';

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
     
        <section className="componentes">
          <MyFirstComponent></MyFirstComponent>
        </section>
      </header>
    </div>
  );
}

export default App;
