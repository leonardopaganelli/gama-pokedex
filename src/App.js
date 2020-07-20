import React, { useState } from 'react';

import GenerationFilter from './components/GenerationFilter/GenerationFilter'
import PokemonCardList from './components/PokemonCardList/PokemonCardList'

import generationList from './components/GenerationFilter/GenerationList'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default () => {
  const [ firstGeneration ] = generationList;

  const [
    currentGenerationFilter,
    setCurrentGenerationFilter
  ] = useState(firstGeneration)

  return (
    <div className="pokedex-app">
      <GenerationFilter handleClick={
        (generationSelected) => setCurrentGenerationFilter(generationSelected)
      } />
      <PokemonCardList filterParams={currentGenerationFilter.parameters} />
    </div>
  );
};