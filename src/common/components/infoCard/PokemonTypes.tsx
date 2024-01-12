import {Text, View} from 'react-native';
import {Pokemon} from '../../../models/PokemonInterface';
import {styles} from '../../styles/CardStyle';

export const PokemonTypes = ({types}: {types: Pokemon['types']}) => {
  return (
    <View>
      <Text style={styles.subtitle2}>Types</Text>
      {types.map((type: any, index: any) => (
        <View key={`${type.type.name}-${index}`}>
          <Text style={styles.rowContent}>{type.type.name}</Text>
        </View>
      ))}
    </View>
  );
};
