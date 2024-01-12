import {Text, View} from 'react-native';
import {Pokemon} from '../../../models/PokemonInterface';
import {styles} from '../../styles/CardStyle';

export const PokemonName = ({name}: {name: Pokemon['name']}) => {
  return (
    <View>
      <Text style={styles.title}>{name.toUpperCase()}</Text>
    </View>
  );
};
