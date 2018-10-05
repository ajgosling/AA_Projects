import React from 'react';

export const selectAllPokemon = (state) => {
  let pokemons = [];
  Object.keys(state.entities.pokemon).forEach((key) => {
    pokemons.push(state.entities.pokemon[key]);
  });

  return pokemons;
};
