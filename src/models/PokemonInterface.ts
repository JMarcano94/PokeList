export interface Pokemon {
  sprites: any;
  type: any;
  types: any;
  name: string;
  url: string;
  height: number;
  weight: number;
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
