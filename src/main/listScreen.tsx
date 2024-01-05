import {ImageBackground, View} from 'react-native';
import {styles} from '../common/styles/CardStyle';
import {PokemonList} from '../common/components/PokemonList';

const backgroundImageUrl = process.env.BACKGROUND_IMAGE_URL;

export const ListScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: backgroundImageUrl}}
        style={styles.background}
      />
      <View style={styles.absoluteView}>
        <PokemonList />
      </View>
    </View>
  );
};
