import axios from 'axios';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {PokemonItem} from './PokemonList';

interface Pokemon {
  sprites: any;
  type: any;
  types: any;
  name: string;
  url: string;
  height: number;
  weight: number;
  stats: any[];
}

export const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (pageNumber: number) => {
    setLoading(true);
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
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <FlatList
      data={pokemonData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <PokemonItem item={item} />}
      onEndReached={() => !loading && fetchData(page)}
      onEndReachedThreshold={0.5}
    />
  );
};
