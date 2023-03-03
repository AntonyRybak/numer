import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
import DateScreen from './screens/DateScreen';
import ContactsScreen from './screens/PredictionScreen';
import PredictionScreen from './screens/ContactsScreen';

 
const homeName = 'Выбор даты';
const detailsName = 'Прогнозы';
const settingsName = 'Контакты';
 
const Tab = createBottomTabNavigator();
 
export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: { paddingBottom: 0, fontSize: 10 },
          tabBarStyle: {
            paddingTop: 8,
            backgroundColor: '#758DFF',
            borderWidth: 1,
            borderColor: 'black',
          },
          headerStyle: {
            backgroundColor: '#758DFF',
          },
          headerTintColor: '#fff',
        })}
      >
        <Tab.Screen name={homeName} component={DateScreen} />
        <Tab.Screen name={detailsName} component={ContactsScreen} />
        <Tab.Screen name={settingsName} component={PredictionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}