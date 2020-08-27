import React from 'react';
import ReactDOM from 'react-dom'
import PrimeraApp from './PrimeraApp'
import './index.css'


const divRoot = document.querySelector('#root');


//const divRoot = document.body.append(saludo); //seria lo mismo pero con DOM podemos crear nuestro arbol de componentes y tiene mas utilidades
ReactDOM.render(<PrimeraApp value ={1} />,divRoot)