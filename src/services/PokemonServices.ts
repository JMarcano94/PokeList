import {Pokemon} from '../models/PokemonInterface';
import {AxiosServices} from '../services/AxiosServices';

export class PokemonService {
  private axiosService = new AxiosServices();

  async getPokemon(page: number): Promise<Pokemon[]> {
    const URL = `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}`;
    const response = await this.axiosService.get(URL);

    if (
      response &&
      'data' in response &&
      Array.isArray(response.data.results)
    ) {
      const pokemonData = await Promise.all(
        response.data.results.map(async (pokemon: any) => {
          try {
            const pokemonResponse = await this.axiosService.get(pokemon.url);
            if ('data' in pokemonResponse) {
              return {
                name: pokemon.name,
                stats: pokemonResponse.data.stats,
                types: pokemonResponse.data.types,
                sprite:
                  pokemonResponse.data.sprites.other['official-artwork']
                    .front_default,
              };
            } else {
              return null;
            }
          } catch (error) {
            console.error(error);
            return null;
          }
        }),
      );

      return pokemonData.filter(pokemon => pokemon !== null);
    } else {
      throw new Error('No se encontraron resultados');
    }
  }
}
