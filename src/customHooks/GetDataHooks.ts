import {useCallback, useEffect, useState} from 'react';
import {Pokemon, Stats} from '../models/PokemonInterface';
import {axiosService} from '../services/AxiosServices';

export const usePokemonData = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const URL = 'https://pokeapi.co/api/v2/pokemon?';
      const offset = (page - 1) * 20; // Ajusta este valor según el número de elementos que quieras cargar por página
      const paginatedURL = `${URL}&offset=${offset}`;
      const response = await axiosService(paginatedURL);
      if (response && response.results) {
        const promises = response.results.map((pokemon: Pokemon) => {
          return axiosService(pokemon.url);
        });
        const pokemonResponses = await Promise.all(promises);
        const updatedPokemonData = pokemonResponses.reduce(
          (acc, pokemonResponse) => {
            //validando que la respuesta de axiosService no sea nula
            if (pokemonResponse) {
              acc.push(pokemonResponse);
              //validando que la respuesta de axiosService contenga datos
            } else {
              console.error('La respuesta de axiosService no contiene datos.');
            }
            return acc;
          },
          [] as Pokemon[],
        );
        setPokemonData(prevData => [...prevData, ...updatedPokemonData]);
        setPage(prevPage => prevPage + 1);
      } else {
        setError('No se encontraron resultados');
      }
    } catch (err: unknown) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [page]); // Añade aquí cualquier otra dependencia que fetchData pueda tener
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {pokemonData, loading, error, fetchData};
};

export const formatStats = (stats: Stats[]): Stats[] => {
  const orderedStats: Stats[] = [];
  const statNames = ['hp', 'attack', 'defense', 'speed'];

  statNames.forEach(name => {
    const stat = stats.find(s => s.stat && s.stat.name === name);
    if (stat) {
      orderedStats.push(stat);
    }
  });
  return orderedStats;
};
