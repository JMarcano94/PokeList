import {useCallback, useEffect, useRef, useState} from 'react';
import {Pokemon} from '../models/PokemonInterface';
import {AxiosServices} from '../services/AxiosServices';
import {useGetPokemonStats} from '../utils/GetStats';

export const GetPokemonData = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState<number>(1);
  const getPokemonStats = useGetPokemonStats();
  const isMounted = useRef(true); // Referencia mutable que se actualiza cuando el componente se monta o desmonta

  useEffect(() => {
    return () => {
      isMounted.current = false; // Actualiza la referencia cuando el componente se desmonta
    };
  }, []);

  const fetchMore = useCallback(async () => {
    setIsLoadingMore(true);
    const axiosService = new AxiosServices();
    try {
      const URL = `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}`;
      const response = await axiosService.get(URL);
      if (
        response &&
        'data' in response &&
        Array.isArray(response.data.results)
      ) {
        const promises = response.data.results.map(getPokemonStats);
        const updatedPokemonData = await Promise.all(promises);
        if (isMounted.current) {
          // Solo actualiza el estado si el componente está montado
          setPokemonData(prevData => [...prevData, ...updatedPokemonData]);
          setPage(prevPage => prevPage + 1);
        }
      } else {
        console.error('No se encontraron resultados');
      }
    } catch (err: unknown) {
      console.error((err as Error).message);
    } finally {
      if (isMounted.current) {
        // Solo actualiza el estado si el componente está montado
        setIsLoadingMore(false);
      }
    }
  }, [page, getPokemonStats]);

  useEffect(() => {
    fetchMore();
  }, [fetchMore]);

  return {pokemonData, isLoadingMore, fetchMore};
};
