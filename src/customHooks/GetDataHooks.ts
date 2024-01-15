import {useContext} from 'react';
import {PokemonDataContext} from '../context/PokemonDataContext';
import {PokemonDataContextValue} from '../models/PokemonInterface';

export const usePokemonData = (): PokemonDataContextValue => {
  const context = useContext(PokemonDataContext);
  if (!context) {
    throw new Error('usePokemonData must be used within a PokemonDataProvider');
  }
  return context;
};
