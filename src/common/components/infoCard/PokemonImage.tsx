import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from '../../styles/CardStyle';

export const PokemonImage = ({sprite}: {sprite: string}) => {
  return (
    <View>
      <FastImage
        style={styles.imagePerfil}
        source={{
          uri: sprite,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};
