import React, { useState, useEffect } from 'react';

import PokemonCard from '../PokemonCard/PokemonCard';

import pokemonService from '../../api/pokemonService';

import './PokemonCardList.css';

export default () => {
  const [pokemonData, setPokemonData] = useState({
    results: []
  });

  useEffect(() => {
    const loadPokemonData = async () => {
      const { data } = await pokemonService.getPokemonList();

      setPokemonData(data);
    };

    loadPokemonData();
  }, []);

  return (
    <ul className="pokemon-card-list">
      { pokemonData.results.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
        />
      ))}
    </ul>
  );
}