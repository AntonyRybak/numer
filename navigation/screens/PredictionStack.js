import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PredictionScreen from '../screens/PredictionScreen';
import PredictionDetailsScreen from '../screens/PredictionDetailsScreen';

const Stack = createStackNavigator();

export default function DateScreen({ navigation })  {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Прогнозы" component={PredictionScreen} />
      <Stack.Screen name="Подробности" component={PredictionDetailsScreen} />
    </Stack.Navigator>
  );
}
