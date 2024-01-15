import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import {PokemonService} from '../services/PokemonServices';
import {
  Pokemon,
  PokemonDataContextProps,
  PokemonDataContextValue,
} from '../models/PokemonInterface';

export const PokemonDataContext = createContext<
  PokemonDataContextValue | undefined
>(undefined);

export const PokemonDataProvider: React.FC<PokemonDataContextProps> = ({
  children,
}) => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState<number>(1);
  const pokemonService = useMemo(() => new PokemonService(), []);

  const fetchMore = useCallback(async () => {
    setIsLoadingMore(true);
    try {
      const newPokemonData = await pokemonService.getPokemon(page);
      setPokemonData(prevData => [...prevData, ...newPokemonData]);
      setPage(prevPage => prevPage + 1);
    } catch (err: unknown) {
      console.error((err as Error).message);
    } finally {
      setIsLoadingMore(false);
    }
  }, [pokemonService, page, setPokemonData, setPage, setIsLoadingMore]);

  useEffect(() => {
    fetchMore();
  }, [fetchMore]);

  return (
    <PokemonDataContext.Provider
      value={{pokemonData, isLoadingMore, fetchMore}}>
      {children}
    </PokemonDataContext.Provider>
  );
};
