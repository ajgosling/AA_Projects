import React from 'React';
import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state={}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      let newState = merge({}, state, action.pokemon);
      return newState;
    default:
      return state;
  }
};


export default pokemonReducer;
