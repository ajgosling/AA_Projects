import React from 'react';
import ReactDOM from 'react-dom';
import {receiveTodos, receiveTodo} from './actions/todos_actions.js';
// import App from './components/app.jsx';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={configureStore()}/>, root);
});


//TO REMOVE LATER
let store = configureStore();
window.store = store;
// window.receiveTodos = receiveTodos;
// window.receiveTodo = receiveTodo;
//TO REMOVE LATER
