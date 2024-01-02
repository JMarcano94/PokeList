import {ImageBackground, View} from 'react-native';
import {styles} from './src/common/styles/CardStyle';
import {PokemonList} from './src/common/components/PokemonFunction';

const backgroundImageUrl = process.env.BACKGROUND_IMAGE_URL;

const App = () => {
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

export default App;
