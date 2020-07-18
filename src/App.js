import React from 'react';

import PokemonCardList from './components/PokemonCardList/PokemonCardList'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default () => (
  <div className="pokedex-app">
    <PokemonCardList />
  </div>
);