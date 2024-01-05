import axios from 'axios';
import {useEffect, useState} from 'react';
import {Pokemon, Stats} from '../models/PokemonInterface';

export const usePokemonData = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (pageNumber: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${
          (pageNumber - 1) * 10
        }`,
      );
      const promises = response.data.results.map((pokemon: Pokemon) => {
        return axios.get(pokemon.url);
      });
      const pokemonResponses = await Promise.all(promises);
      const updatedPokemonData = pokemonResponses.map(
        pokemonResponse => pokemonResponse.data,
      );
      setPokemonData(prevData => [...prevData, ...updatedPokemonData]);
      setPage(prevPage => prevPage + 1);
    } catch (catchError) {
      setError('Hubo un error al obtener los datos de Pokémon.');
      console.error(catchError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return {pokemonData, loading, error};
};

export const formatStats = (stats: Stats[]): Stats[] => {
  const orderedStats: Stats[] = [];
  const statNames = ['hp', 'attack', 'defense', 'speed'];

  statNames.forEach(name => {
    const stat = stats.find(s => s.stat.name === name);
    if (stat) {
      orderedStats.push(stat);
    }
  });

  return orderedStats;
};
