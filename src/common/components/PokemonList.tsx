import {memo} from 'react';
import {View, Text, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from '../styles/CardStyle';
import {formatStats, usePokemonData} from '../../customHooks/GetDataHooks';
import {Pokemon, Stats} from '../../models/PokemonInterface';

export const PokemonStats = memo(({stats}: {stats: Stats[]}) => {
  const orderedStats = formatStats(stats);

  return (
    <View>
      <Text style={styles.subtitle}>Stats</Text>
      {orderedStats.map((stat: Stats, index: number) => (
        <View key={`${stat.stat.name}-${index}`}>
          <Text style={styles.rowContent}>
            {stat.stat.name}: {stat.base_stat}
          </Text>
        </View>
      ))}
    </View>
  );
});

const PokemonTypes = memo(({types}: {types: Pokemon['types']}) => {
  return (
    <View>
      <Text style={styles.subtitle}>Types</Text>
      {types.map((type: any, index: any) => (
        <View key={`${type.type.name}-${index}`}>
          <Text style={styles.rowContent}>{type.type.name}</Text>
        </View>
      ))}
    </View>
  );
});

const PokemonImage = memo(({sprites}: {sprites: Pokemon['sprites']}) => {
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
});

const PokemonName = memo(({name}: {name: Pokemon['name']}) => {
  return (
    <View>
      <Text style={styles.title}>{name.toUpperCase()}</Text>
    </View>
  );
});

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

export const PokemonList = () => {
  const {pokemonData} = usePokemonData(); // Accede directamente a pokemonData

  return (
    <FlatList
      data={pokemonData} // Usa pokemonData directamente
      renderItem={({item}) => <PokemonItem item={item} />}
      keyExtractor={(item, index) => item.name + index}
      initialNumToRender={10}
      windowSize={10}
      removeClippedSubviews
    />
  );
};
