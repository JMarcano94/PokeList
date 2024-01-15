import {View} from 'react-native';
import {styles} from '../../styles/CardStyle';
import {PokemonName} from './PokemonName';
import {PokemonStats} from './PokemonStats';
import {PokemonTypes} from './PokemonTypes';
import {PokemonImage} from './PokemonImage';
import React from 'react';
import {PokemonCardProps} from '../../../models/PokemonInterface';

export class PokemonCard extends React.PureComponent<PokemonCardProps> {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.card}>
        <PokemonName name={item.name} />
        <View style={styles.row}>
          <PokemonStats stats={item.stats} />
          <PokemonTypes types={item.types} />
        </View>
        <PokemonImage sprite={item.sprite} />
      </View>
    );
  }
}
