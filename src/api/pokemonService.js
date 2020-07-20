import axios from 'axios';

export default {
  getPokemonList: async (params = { offset: 0, limit: 151}) => axios
    .get('https://pokeapi.co/api/v2/pokemon', { params}),

  getPokemonDetail: async (name) => axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
}