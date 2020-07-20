import React, { useState, useEffect } from 'react';

import PokemonCard from '../PokemonCard/PokemonCard';

import pokemonService from '../../api/pokemonService';

import './PokemonCardList.css';

export default (props) => {
  const { filterParams } = props;

  const [pokemonData, setPokemonData] = useState({
    results: []
  });

  useEffect(() => {
    const loadPokemonData = async () => {
      const { data } = await pokemonService
        .getPokemonList(filterParams);

      setPokemonData(data);
    };

    loadPokemonData();
  }, [filterParams]);

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