import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ListScreen} from './src/main/listScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pokemon List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
