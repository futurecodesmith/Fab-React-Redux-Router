import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Store from './store';
import { Provider } from 'react-redux';


let state = {
    shelf: [
      {
        src: "https://unsplash.it/300?image=14",
        name: "Blissful Ignorance",
        description: "49",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=18",
        name: "Mountaintop Experience",
        description: "39",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=10",
        name: "Delight and Cherish",
        description: "49",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=20",
        name: "Magical One",
        description: "29",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=21",
        name: "Amazon Rainfall",
        description: "39",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=32",
        name: "Valley Below",
        description: "59",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=34",
        name: "Valley Below",
        description: "59",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=44",
        name: "Valley Below",
        description: "59",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=42",
        name: "Valley Below",
        description: "59",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=45",
        name: "Valley Below",
        description: "59",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=55",
        name: "Valley Below",
        description: "59",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=52",
        name: "Valley Below",
        description: "59",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=14",
        name: "Blissful Ignorance",
        description: "49",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=18",
        name: "Mountaintop Experience",
        description: "39",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=10",
        name: "Delight and Cherish",
        description: "49",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=20",
        name: "Magical One",
        description: "29",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=21",
        name: "Amazon Rainfall",
        description: "39",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=32",
        name: "Valley Below",
        description: "59",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=34",
        name: "Valley Below",
        description: "59",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=44",
        name: "Valley Below",
        description: "59",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=42",
        name: "Valley Below",
        description: "59",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=45",
        name: "Valley Below",
        description: "59",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=55",
        name: "Valley Below",
        description: "59",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=52",
        name: "Valley Below",
        description: "59",
        id: Math.floor(Math.random() * 1000)
      },
    ]
  }


const storeInstance = Store(state);

ReactDOM.render(
<Provider store={storeInstance}>
  <App /> 
</Provider>, 
document.getElementById('root'));

registerServiceWorker();
