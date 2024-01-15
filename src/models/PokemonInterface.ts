export interface Pokemon {
  sprite: string;
  name: string;
  url: string;
  type: string;
  types: any[];
  stats: Stats[];
}

export interface Stats {
  stat: {
    name: string;
  };
  base_stat: number;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface PokemonApiResponse {
  count: number;
  next: string;
  previous: string;
  stats: Stats[];
}

export interface PokemonDataContextProps {
  children: React.ReactNode;
}

export interface PokemonDataContextValue {
  pokemonData: Pokemon[];
  isLoadingMore: boolean;
  fetchMore: () => void;
}

export interface PokemonCardProps {
  item: Pokemon;
}
