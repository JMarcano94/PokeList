import {useCallback} from 'react';
import {Pokemon} from '../models/PokemonInterface';
import {AxiosServices, PokemonResponse} from '../services/AxiosServices';

export const useGetPokemonStats = () => {
  const axiosService = new AxiosServices();

  const getPokemonStats = useCallback(async (pokemon: Pokemon) => {
    try {
      const response: PokemonResponse = await axiosService.get(pokemon.url);
      if (response && 'data' in response) {
        return response.data;
      } else {
        console.error('La respuesta de axiosService no contiene datos.');
        return null;
      }
    } catch (err: unknown) {
      console.error((err as Error).message);
      return null;
    }
  }, []);

  return getPokemonStats;
};
