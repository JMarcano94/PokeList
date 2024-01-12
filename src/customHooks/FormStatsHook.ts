import {Stats} from '../models/PokemonInterface';

export const formatStats = (stats: Stats[], statNames: string[]): Stats[] => {
  const orderedStats: Stats[] = [];

  statNames.forEach(name => {
    const stat = stats.find(s => s?.stat?.name === name); // Add null check
    if (stat) {
      orderedStats.push(stat);
    }
  });

  return orderedStats;
};
