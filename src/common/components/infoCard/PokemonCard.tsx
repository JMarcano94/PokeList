import {View} from 'react-native';
import {Pokemon} from '../../../models/PokemonInterface';
import {styles} from '../../styles/CardStyle';
import {PokemonName} from './PokemonName';
import {PokemonStats} from './PokemonStats';
import {PokemonTypes} from './PokemonTypes';
import {PokemonImage} from './PokemonImage';

export const PokemonCard = ({item}: {item: Pokemon}) => {
  return (
    <View style={styles.card}>
      <PokemonName name={item.name} />
      <View style={styles.row}>
        <PokemonStats stats={item.stats} />
        <PokemonTypes types={item.types} />
      </View>
      <PokemonImage sprites={item.sprites} />
    </View>
  );
};
