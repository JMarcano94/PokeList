import {Text, View} from 'react-native';
import {styles} from '../../styles/CardStyle';

export const PokemonStats = ({stats}: {stats: any[]}) => {
  const order = [
    'hp',
    'speed',
    'attack',
    'defense',
    'special-attack',
    'special-defense',
  ];
  const orderedStats = stats.sort(
    (a, b) => order.indexOf(a.stat.name) - order.indexOf(b.stat.name),
  );

  return (
    <View>
      <Text style={styles.subtitle1}>Stats</Text>
      {orderedStats.map((stat, index) => (
        <Text
          style={styles.rowContent}
          key={index}>{`${stat.stat.name}: ${stat.base_stat}`}</Text>
      ))}
    </View>
  );
};
