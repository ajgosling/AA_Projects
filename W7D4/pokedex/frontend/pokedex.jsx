import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { hashRouter, Route } from 'react-router-dom';

// import {fetchAllPokemon} from './util/api_util';
// import {receiveAllPokemon} from './actions/pokemon_actions';
// import {selectAllPokemon} from './reducers/selectors';
// import {requestAllPokemon} from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
