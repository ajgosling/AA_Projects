import React from 'React';
import {RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state={}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      newState = merge({}, state);
      newState = action.payload.items;
      return newState;
    default:
      return state;
  }
};

export default itemsReducer;
