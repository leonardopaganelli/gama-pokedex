import axios from 'axios';

export default {
  getPokemonList: async (params = { offset: 0, limit: 300}) => axios
    .get('https://pokeapi.co/api/v2/pokemon', { params}),

  getPokemonDetail: async (id) => axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
}