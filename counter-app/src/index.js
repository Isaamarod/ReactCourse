import React from 'react';
import ReactDOM from 'react-dom'

const saludo=<h1>Hola Mundo</h1>;



const divRoot = document.querySelector('#root');


//const divRoot = document.body.append(saludo); //seria lo mismo pero con DOM podemos crear nuestro arbol de componentes y tiene mas utilidades
ReactDOM.render(saludo,divRoot)