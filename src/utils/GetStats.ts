import {useCallback} from 'react';
import {Pokemon} from '../models/PokemonInterface';
import {AxiosServices, PokemonResponse} from '../services/AxiosServices';
import {AxiosError} from 'axios';

export const useGetPokemonStats = () => {
  const getPokemonStats = useCallback(async (pokemon: Pokemon) => {
    const axiosService = new AxiosServices();
    try {
      const response = await axiosService.get(pokemon.url);
      if (response && 'data' in response) {
        return response.data as PokemonResponse;
      } else {
        console.error('La respuesta de axiosService no contiene datos.');
        return null;
      }
    } catch (err: unknown) {
      console.error((err as AxiosError).message);
      return null;
    }
  }, []);

  return getPokemonStats;
};
