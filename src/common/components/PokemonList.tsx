import {FlatList} from 'react-native';
import {GetPokemonData} from '../../customHooks/GetDataHooks';
import {PokemonCard} from './infoCard/PokemonCard';
import {Pokemon} from '../../models/PokemonInterface';
import {FooterComponent} from './FooterComponent';

export const PokemonList = () => {
  const {pokemonData, fetchMore, isLoadingMore} = GetPokemonData();
  return (
    <FlatList
      data={pokemonData}
      renderItem={({item}: {item: Pokemon}) => <PokemonCard item={item} />}
      keyExtractor={(item, index) => item.name + index}
      initialNumToRender={20}
      maxToRenderPerBatch={20}
      windowSize={10}
      removeClippedSubviews
      onEndReached={() => fetchMore()}
      onEndReachedThreshold={0.5}
      ListFooterComponent={<FooterComponent isLoadingMore={isLoadingMore} />}
    />
  );
};
