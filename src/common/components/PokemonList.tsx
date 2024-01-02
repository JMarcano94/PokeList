import {memo} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from '../styles/CardStyle';

interface Pokemon {
  sprites: any;
  type: any;
  types: any;
  name: string;
  url: string;
  height: number;
  weight: number;
  stats: Stats[];
}
interface Stats {
  stat: string;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}
const PokemonStats = ({stats}: {stats: Pokemon['stats']}) => {
  const reorderedStats = [
    'hp',
    'attack',
    'defense',
    'speed',
    'specialAttack',
    'specialDefense',
  ];

  const sortedStats = stats.sort((a, b) => {
    const indexA = reorderedStats.indexOf(b.stat);
    const indexB = reorderedStats.indexOf(a.stat);
    return indexA - indexB;
  });

  return (
    <View>
      <Text style={styles.subtitle}>Stats</Text>
      {sortedStats.map((stat: any, index: any) => (
        <View key={index.toString()}>
          <Text style={styles.rowContent}>
            {stat.stat.name}: {stat.base_stat}
          </Text>
        </View>
      ))}
    </View>
  );
};
const PokemonTypes = ({types}: {types: Pokemon['types']}) => {
  return (
    <View>
      <Text style={styles.subtitle}>Types</Text>
      {types.map((type: any, index: any) => (
        <View key={index.toString()}>
          <Text style={styles.rowContent}>{type.type.name}</Text>
        </View>
      ))}
    </View>
  );
};
const PokemonImage = ({sprites}: {sprites: Pokemon['sprites']}) => {
  return (
    <View>
      <FastImage
        style={styles.imagePerfil}
        source={{
          uri: sprites.other['official-artwork'].front_default,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const PokemonName = ({name}: {name: Pokemon['name']}) => {
  return (
    <View>
      <Text style={styles.title}>{name.toUpperCase()}</Text>
    </View>
  );
};

export const PokemonItem = memo(({item}: {item: Pokemon}) => {
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
});
