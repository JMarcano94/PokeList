import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from '../../styles/CardStyle';
import {Pokemon} from '../../../models/PokemonInterface';

export const PokemonImage = ({sprites}: {sprites: Pokemon['sprites']}) => {
  return (
    <View>
      <FastImage
        style={styles.imagePerfil}
        source={{
          uri: sprites?.other?.['official-artwork']?.front_default,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};
