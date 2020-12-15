// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
//import Badge from './components/Badge'
//import BadgeNew from './pages/BadgeNew'
//import Badges from './pages/Badges'
import App from './components/App'


import './global.css'
import 'bootstrap/dist/css/bootstrap.css'
//En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.
//const name = 'jose...'
//const jsx = <h1>Hello, {name}!</h1>;
//const element = React.createElement(elemento, atributos, contenido)
//const element = React.createElement('h1', {}, 'Oi, Jose! Vamos con toda.')

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
//ReactDOM.render(<Badge firstName="Jose" lastName="Caicedo" description="Agrogramer en desarrollo." redes="jose.caicedo.dev" avatarURL="https://s.gravatar.com/avatar/cc1972e508fae75bdcba7e711595bb56?s=80" />, container);
ReactDOM.render(<App></App>, container);